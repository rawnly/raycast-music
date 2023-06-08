/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /**  - Use the Music Rest API to interact with Apple Music. This is experimental and may not work as expected. */
  "experimental_music_api": boolean,
  /**  - Display toast messages / HUD notifications when actions are completed */
  "enhancedFeedback": boolean,
  /**  - Prefer Grids over Lists when possible */
  "preferGrids": boolean,
  /**  - Close Raycast when using the play/pause, next track, previous track, volume up, and volume down etc... */
  "closeMainWindowOnControls": boolean,
  /** Volume Steps - Specify the amount of change for volume levels */
  "volumeSteps": "5" | "10" | "25"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `quick-actions` command */
  export type QuickActions = ExtensionPreferences & {}
  /** Preferences accessible in the `currently-playing` command */
  export type CurrentlyPlaying = ExtensionPreferences & {
  /** Preferences - Display the artwork of the currently playing track */
  "displayArtwork": boolean,
  /**  - Display the title of the current track in menubar */
  "displayTitle": boolean,
  /** Max Title Length - Specify the maximum length of the title */
  "maxTitleLength"?: string
}
  /** Preferences accessible in the `recently-played` command */
  export type RecentlyPlayed = ExtensionPreferences & {}
  /** Preferences accessible in the `recommendations` command */
  export type Recommendations = ExtensionPreferences & {
  /** Preferences - Display recommendations as a List instead of Grid */
  "recommendations_displayAsList"?: boolean
}
  /** Preferences accessible in the `login` command */
  export type Login = ExtensionPreferences & {}
  /** Preferences accessible in the `start-playlist` command */
  export type StartPlaylist = ExtensionPreferences & {}
  /** Preferences accessible in the `set-volume` command */
  export type SetVolume = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `quick-actions` command */
  export type QuickActions = {}
  /** Arguments passed to the `currently-playing` command */
  export type CurrentlyPlaying = {}
  /** Arguments passed to the `recently-played` command */
  export type RecentlyPlayed = {}
  /** Arguments passed to the `recommendations` command */
  export type Recommendations = {}
  /** Arguments passed to the `login` command */
  export type Login = {}
  /** Arguments passed to the `start-playlist` command */
  export type StartPlaylist = {}
  /** Arguments passed to the `set-volume` command */
  export type SetVolume = {
  /** e.g 25 */
  "volume": string
}
}
