import { createIcon } from "@gluestack-ui/icon";
import React from "react";
import Svg from "react-native-svg";

const SlidersHorizontalIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </>
  ),
});

SlidersHorizontalIcon.displayName = "SettingsIcon";
export { SlidersHorizontalIcon };

const LogoIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 150 150",
  path: (
    <>
      <path
        d="M73.4,0c15.9,0.3,31.3,4.6,44.6,15.4c3.2,2.6,7.1,4.9,3,9.8c-3.5,4.1-6.6,5.9-11.9,1.7  C73.5-0.7,23.7,19.7,15.7,63.4c-3,16.4,1.1,31.3,11.3,44.7c2.3,3.1,4.9,5.8,1.3,10.1c-5.3,5.9-7.4,6.3-12.2-0.1  C-1.8,94.2-5,68.5,7.5,41.5C19.2,16.1,45,0,73.4,0z"
        fill="rgb(246, 179, 18)"
      />
      <path
        d="M25.1,72.9c0.3-19.2,9-33.9,25.7-42.7c16.5-8.7,33.4-7.8,49.2,2.7c3.1,2.1,8.1,3.9,4.2,9.3  c-3.2,4.5-6.1,7.1-12.2,3.2c-15.6-9.8-31.7-7.8-43.9,4.7c-10.2,10.3-11.4,28.5-2.2,42.7c4,6.1-0.8,8.3-3.7,11.1  c-3.7,3.5-5.9-0.3-8-2.9C28.1,93,24.9,83,25.1,72.9z"
        fill="#FFFFFFFF"
      />
      <path
        d="M146,74.8c-1.4,36.3-28.6,66.3-63.7,70.2c-3.7,0.5-8.8,2.4-9.5-4.1c-0.7-5.5,0.3-9.1,7.5-10.2  c29.4-4.2,50-27.1,51.4-56.6c0.2-5.8,1.5-8.9,8-8.7C146.8,65.5,146,70.2,146,74.8z"
        fill="#FFFFFFFF"
      />
      <path
        d="M105.3,80.4H69c2.4-8.3,9.6-14.9,16.2-15c9.6-0.1,19.2,0.1,28.7,0c5.1-0.1,7.1,2.2,7.1,7.4  c0.3,22.3-16.5,43.1-38.7,47.2c-3.5,0.7-8.2,2.5-9.3-3.2c-0.9-4.9-1-9.8,6.3-11.2C92.7,102.9,101.7,95.4,105.3,80.4z"
        fill="rgb(246, 179, 18)"
      />
    </>
  ),
});

LogoIcon.displayName = "LogoIcon";
export { LogoIcon };
