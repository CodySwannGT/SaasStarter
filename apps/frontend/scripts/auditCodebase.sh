#!/bin/bash

# Script to audit codebase for compliance with coding standards
# Usage: ./auditCodebase.sh [directory] [--staged-only]

DIR_TO_SCAN="${1:-.}"
STAGED_ONLY=false
OUTPUT_FILE="codebase-audit-results.md"

# Check if --staged-only flag is passed
if [ "$2" = "--staged-only" ]; then
  STAGED_ONLY=true
  # When in staged-only mode, we'll output to stdout instead of a file
  # so that it's visible in the git commit output
  OUTPUT_TO_STDOUT=true
else
  OUTPUT_TO_STDOUT=false
fi

# Exclude node_modules, and other common directories
EXCLUDE_DIRS="--exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build"

# Create temporary files directory with timestamp to avoid conflicts
TIMESTAMP=$(date +%s)
TMP_DIR="/tmp/audit_results_${TIMESTAMP}"
mkdir -p $TMP_DIR
touch $TMP_DIR/view_returns.txt $TMP_DIR/view_logic.txt $TMP_DIR/inline_objects.txt $TMP_DIR/inline_functions.txt $TMP_DIR/large_files.txt $TMP_DIR/missing_callback.txt
> $TMP_DIR/view_returns.txt
> $TMP_DIR/view_logic.txt
> $TMP_DIR/inline_objects.txt 
> $TMP_DIR/inline_functions.txt
> $TMP_DIR/large_files.txt
> $TMP_DIR/missing_callback.txt

if [ "$OUTPUT_TO_STDOUT" = true ]; then
  OUTFILE="/dev/stdout"
else
  OUTFILE="$OUTPUT_FILE"
  echo "# Codebase Audit Results" > $OUTFILE
  echo "Generated on $(date)" >> $OUTFILE
  echo "" >> $OUTFILE
fi

# Function to count lines in a file
count_lines() {
  wc -l "$1" | awk '{print $1}'
}

# Function to output text to either stdout or the output file
output() {
  echo "$1" >> $OUTFILE
}

# Check for View components not using arrow function shorthand syntax
output "## View Components Not Using Arrow Function Shorthand"
output ""
output "Checking for View components that use return statements instead of shorthand syntax:"
output ""

# Find View files with return keyword and curly braces
grep -r "return " --include="*View.tsx" $EXCLUDE_DIRS "$DIR_TO_SCAN" | grep -v "=>[ ]*(" | sort > $TMP_DIR/view_returns.txt

if [ -s $TMP_DIR/view_returns.txt ]; then
  output "The following View components may not be using arrow function shorthand syntax:"
  output '```'
  cat $TMP_DIR/view_returns.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No View components found using explicit return statements!"
fi
output ""

# Check for logic in View components
output "## Logic in View Components"
output ""
output "Checking for View components that contain conditional logic or variable declarations:"
output ""

# Find View files with if, for, while, let, const, or var
grep -r -E "(if[^a-zA-Z]|for[^a-zA-Z]|while[^a-zA-Z]|let |const |var |function)" --include="*View.tsx" $EXCLUDE_DIRS "$DIR_TO_SCAN" | grep -v "import" | grep -v "interface" | grep -v "type " | grep -v "//" | sort > $TMP_DIR/view_logic.txt

if [ -s $TMP_DIR/view_logic.txt ]; then
  output "The following View components appear to contain logic that should be in Container components:"
  output '```'
  cat $TMP_DIR/view_logic.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No logic found in View components!"
fi
output ""

# Check for non-memoized objects or arrays in JSX
output "## Non-Memoized Objects or Arrays in Props"
output ""
output "Checking for inline object or array literals in JSX (should use useMemo):"
output ""

# Find JSX with inline objects or arrays
grep -r -E "(<[A-Z][A-Za-z0-9]+ [^>]*\{[^{}]*\}|\[[^][]*\])" --include="*.tsx" $EXCLUDE_DIRS "$DIR_TO_SCAN" | grep -v "useMemo" | grep -v "import" | grep -v "interface" | grep -v "type " | grep -v "//" | sort > $TMP_DIR/inline_objects.txt

if [ -s $TMP_DIR/inline_objects.txt ]; then
  output "The following components may be using inline object/array literals (should use useMemo):"
  output '```'
  cat $TMP_DIR/inline_objects.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No inline object/array literals found in JSX!"
fi
output ""

# Check for inline function definitions in JSX
output "## Non-Memoized Functions in Props"
output ""
output "Checking for inline function definitions in JSX (should use useCallback):"
output ""

# Find JSX with inline functions
grep -r -E "(on[A-Z][a-zA-Z]*=\{[^{}]*=>|on[A-Z][a-zA-Z]*=\{[^{}]*function)" --include="*.tsx" $EXCLUDE_DIRS "$DIR_TO_SCAN" | grep -v "useCallback" | grep -v "import" | grep -v "interface" | grep -v "type " | grep -v "//" | sort > $TMP_DIR/inline_functions.txt

if [ -s $TMP_DIR/inline_functions.txt ]; then
  output "The following components may be using inline functions (should use useCallback):"
  output '```'
  cat $TMP_DIR/inline_functions.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No inline functions found in JSX!"
fi
output ""

# Check for file size exceeding limit
output "## Files Exceeding Line Limit"
output ""
output "Checking for files exceeding the 200-line limit:"
output ""

# Now check for large files
# Find files with more than 200 lines
find "$DIR_TO_SCAN" \( -name "*.tsx" -o -name "*.ts" \) -type f -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/build/*" | while read file; do
  lines=$(count_lines "$file")
  if [ "$lines" -gt 200 ]; then
    echo "$file: $lines lines" >> $TMP_DIR/large_files.txt
    HAS_ERRORS=true
  fi
done

if [ -s $TMP_DIR/large_files.txt ]; then
  output "The following files exceed the 200-line limit:"
  output '```'
  sort -t: -k2 -nr $TMP_DIR/large_files.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No files exceed the 200-line limit!"
fi
output ""

# Check for missing useCallback on handler functions
output "## Missing useCallback on Handler Functions"
output ""
output "Checking for handler functions without useCallback:"
output ""

# Find handler functions without useCallback
grep -r -E "const handle[A-Z][a-zA-Z]* = " --include="*.tsx" $EXCLUDE_DIRS "$DIR_TO_SCAN" | grep -v "useCallback" | grep -v "//.*handle" | sort > $TMP_DIR/missing_callback.txt

if [ -s $TMP_DIR/missing_callback.txt ]; then
  output "The following handler functions should use useCallback:"
  output '```'
  cat $TMP_DIR/missing_callback.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ All handler functions appear to use useCallback!"
fi
output ""

# Check for className usage outside of UI directories
output "## Incorrect className Usage"
output ""
output "Checking for files using className prop outside of UI directories:"
output ""

# Find files with className that are not in a ui directory path
# First, create a list of all tsx files
find "$DIR_TO_SCAN" -name "*.tsx" -not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/build/*" > $TMP_DIR/all_tsx_files.txt

# Filter the files to keep only those that don't have "/ui/" in their path
grep -v "/ui/" $TMP_DIR/all_tsx_files.txt > $TMP_DIR/non_ui_tsx_files.txt

# Check each non-UI file for className usage and count occurrences
cat $TMP_DIR/non_ui_tsx_files.txt | while read file; do
  count=$(grep -c "className=" "$file")
  if [ "$count" -gt 0 ]; then
    # Store count padded with zeros for sorting (up to 999)
    padded_count=$(printf "%03d" $count)
    echo "$padded_count:$file: $count className occurrences" >> $TMP_DIR/className_outside_ui.txt
    HAS_ERRORS=true
  fi
done

# Sort the results by occurrence count (descending) and remove the sort key
if [ -f "$TMP_DIR/className_outside_ui.txt" ]; then
  sort -r $TMP_DIR/className_outside_ui.txt | sed 's/^[0-9]*://' > $TMP_DIR/className_outside_ui_sorted.txt
  mv $TMP_DIR/className_outside_ui_sorted.txt $TMP_DIR/className_outside_ui.txt
fi

if [ -s $TMP_DIR/className_outside_ui.txt ]; then
  # Count total files with className issues
  file_count=$(wc -l < $TMP_DIR/className_outside_ui.txt)
  
  output "Found $file_count files using className outside of UI directories (should use Tailwind instead):"
  output '```'
  cat $TMP_DIR/className_outside_ui.txt >> $OUTFILE
  output '```'
  HAS_ERRORS=true
else
  output "✅ No inappropriate className usage found outside of UI directories!"
fi

# Clean up temp files
rm -rf $TMP_DIR

output ""
output "## Summary"
output ""
output "This audit was generated automatically and may include false positives."
output "Manual review is recommended for each identified issue."

if [ "$OUTPUT_TO_STDOUT" = false ]; then
  echo "Audit complete! Results written to $OUTPUT_FILE"
fi

# If in staged-only mode and errors were found, exit with error code to block commit
if [ "$STAGED_ONLY" = true ] && [ "$HAS_ERRORS" = true ]; then
  exit 1
fi

exit 0