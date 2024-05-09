import { HeaderItemProps } from "../components/Header/HeaderItem";

import { PlaylistItemProps } from "../components/Playlist/PlaylistItem";

import { QuickSelectItemProps } from "../components/QuickSelect/QuickSelectItem";

import { StatsItemProps } from "../components/Stats/StatsItem";

import { ModifierItemProps } from "../components/Modifier/ModifierItem";

import { SettingCatagoryItemProps } from "../components/SettingCatagory/SettingCatagoryItem";

import { SettingItemProps } from "../components/Setting/SettingItem";

import { DropDownItemProps } from "../components/DropDown/DropDownItem";

import { TopMixesItemProps } from "../components/TopMixes/TopMixesItem";

import { SearchCardItemProps } from "../components/SearchCard/SearchCardItem";

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
    pin: true
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    artist: "someone",
    pin: false
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    artist: "someone",
    pin: false
  },
];

export const TOPMIXES_LIST: TopMixesItemProps[] = [
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "primary.500"
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "yellow.200"
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "green.300"
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "blue.300"
  },
  {
    name: "demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "red.100"
  },
];


export const SEARCHCARD_LIST: SearchCardItemProps[] = [
  {
    name: "Demo",
    image: "https://i.kym-cdn.com/entries/icons/original/000/038/456/christmas_who_wide.png",
    color: "primary.500"
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
