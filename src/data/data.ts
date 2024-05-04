import { HeaderItemProps } from "../components/Header/HeaderItem";

import { PlaylistItemProps } from "../components/Playlist/PlaylistItem";

import { QuickSelectItemProps } from "../components/QuickSelect/QuickSelectItem";

import { StatsItemProps } from "../components/Stats/StatsItem";

import { ModifierItemProps } from "../components/Modifier/ModifierItem";

import { SettingCatagoryItemProps } from "../components/SettingCatagory/SettingCatagoryItem";

import { SettingItemProps } from "../components/Setting/SettingItem";

import { DropDownItemProps } from "../components/DropDown/DropDownItem";
export const IMG_URL =
  "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png";
export const HEADER_LIST: HeaderItemProps[] = [
  {
    name: "demo",
    avatar: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
  },
];

export const QUICKSELECT_LIST: QuickSelectItemProps[] = [
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    artist: "someone",
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    artist: "someone",
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    artist: "someone",
  },
];

// export const STATS_LIST: StatsItemProps[] = [
//     {
//         top: 1,
//         name: "aaaaaa",
//         artist: "bbbbbbbbbb",
//         image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
//     }
// ];

// export const MODIFIER_LIST: ModifierItemProps[] = [
//     {
//     name: "Volume",
//     }
// ];

// export const SETTINGCATAGORY_LIST: SettingCatagoryItemProps[] = [
//     {
//     name: "Volume",
//     icon: "person-outline"
//     }
// ];

// export const SETTING_LIST: SettingItemProps[] = [
//     {
//     name: "Volume",
//     nameDescription: "yeah",
//     info: "aaaaaaaaa"
//     }
// ];
export const DROPDOWN_LIST: DropDownItemProps[] = [
  {
    name: "RecentlyPlayed",
  },
];
