// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

// @ts-nocheck TODO(petemill): Define types and remove ts-nocheck

import {pageVisibility} from './brave_overrides/page_visibility.js'
import {loadTimeData} from './i18n_setup.js'
import {SettingsRoutes} from 'chrome://settings/settings.js';

export default function addBraveRoutes(r: Partial<SettingsRoutes>) {
  const isGuest = loadTimeData.getBoolean('isGuest')
  if (!r.BASIC) {
    console.error('[Brave Settings Overrides] Routes: could not find BASIC page')
  }
  if (pageVisibility.getStarted) {
    r.GET_STARTED = r.BASIC.createSection('/getStarted', 'getStarted')
    // bring back people's /manageProfile (now in getStarted)
    r.MANAGE_PROFILE = r.GET_STARTED.createChild('/manageProfile');
    // We re-section people page into getStarted section (see people_page Brave
    // override), so we need to adjust the route accordingly in order for the
    // direct navigation to brave://settings/importData to work.
    if (r.IMPORT_DATA) {
      r.IMPORT_DATA.section = 'getStarted'
    }
  }
  r.SHIELDS = r.BASIC.createSection('/shields', 'shields')
  r.SHIELDS_ADBLOCK = r.SHIELDS.createChild('/shields/filters')
  if (loadTimeData.getBoolean('isBraveRewardsSupported')) {
    r.REWARDS = r.BASIC.createSection('/rewards', 'rewards')
  }
  if (loadTimeData.getBoolean('areShortcutsSupported')) {
    if (r.SYSTEM) {
      r.SHORTCUTS = r.SYSTEM.createChild('/system/shortcuts')
    } else if (!isGuest) {
      console.error('[Brave Settings Overrides] Routes: could not find SYSTEM page')
    }
  }
  r.SOCIAL_BLOCKING = r.BASIC.createSection('/socialBlocking', 'socialBlocking')
  r.EXTENSIONS = r.BASIC.createSection('/extensions', 'extensions')
  r.EXTENSIONS_V2 = r.EXTENSIONS.createChild('/extensions/v2')
  if (pageVisibility.braveSync) {
    r.BRAVE_SYNC = r.BASIC.createSection('/braveSync', 'braveSync')
    r.BRAVE_SYNC_SETUP = r.BRAVE_SYNC.createChild('/braveSync/setup');
  }
  if (pageVisibility.braveWeb3) {
    r.BRAVE_WEB3 = r.BASIC.createSection('/web3', 'web3')
  }
  if (pageVisibility.braveIPFS) {
    r.BRAVE_IPFS = r.BRAVE_WEB3.createSection('/ipfs', 'ipfs')
    r.BRAVE_IPFS_KEYS = r.BRAVE_IPFS.createChild('/ipfs/keys');
    r.BRAVE_IPFS_PEERS = r.BRAVE_IPFS.createChild('/ipfs/peers');
  }
  if (pageVisibility.braveWallet) {
    r.BRAVE_WALLET = r.BRAVE_WEB3.createSection('/wallet', 'wallet')
    r.BRAVE_WALLET_NETWORKS = r.BRAVE_WALLET.createChild('/wallet/networks');
  }
  if (r.ADVANCED) {
    r.BRAVE_HELP_TIPS = r.ADVANCED.createSection('/braveHelpTips', 'braveHelpTips')
  } else if (!isGuest) {
    console.error('[Brave Settings Overrides] Could not find ADVANCED page', r)
  }
  r.BRAVE_NEW_TAB = r.BASIC.createSection('/newTab', 'newTab')
  if (r.SITE_SETTINGS_SITE_DETAILS) {
    r.BRAVE_SITE_SETTINGS_COOKIES_DETAILS =
      r.SITE_SETTINGS_SITE_DETAILS.createChild('/cookies/detail');
  } else if (!isGuest) {
    console.error('[Brave Settings Overrides] could not find expected route /content/siteDetails')
  }
  if (pageVisibility.leoAssistant) {
    r.BRAVE_LEO_ASSISTANT =
      r.BASIC.createSection('/leo-assistant', 'leoAssistant')
  }
  if (r.SITE_SETTINGS) {
    r.SITE_SETTINGS_AUTOPLAY = r.SITE_SETTINGS.createChild('autoplay')
    const isGoogleSignInFeatureEnabled = loadTimeData.getBoolean('isGoogleSignInFeatureEnabled')
    if (isGoogleSignInFeatureEnabled) {
      r.SITE_SETTINGS_GOOGLE_SIGN_IN = r.SITE_SETTINGS.createChild('googleSignIn')
    }
    const isLocalhostAccessFeatureEnabled =
      loadTimeData.getBoolean('isLocalhostAccessFeatureEnabled')
    if (isLocalhostAccessFeatureEnabled) {
      r.SITE_SETTINGS_LOCALHOST_ACCESS = r.SITE_SETTINGS
        .createChild('localhostAccess')
    }
    const isNativeBraveWalletFeatureEnabled = loadTimeData.getBoolean('isNativeBraveWalletFeatureEnabled')
    if (isNativeBraveWalletFeatureEnabled) {
      r.SITE_SETTINGS_ETHEREUM = r.SITE_SETTINGS.createChild('ethereum')
      r.SITE_SETTINGS_SOLANA = r.SITE_SETTINGS.createChild('solana')
    }
    r.SITE_SETTINGS_SHIELDS_STATUS = r.SITE_SETTINGS.createChild('braveShields')
    if (r.SITE_SETTINGS_ADS) {
      delete r.SITE_SETTINGS_ADS
    } else {
      console.error('[Brave Settings Overrides] could not find expected route site_settings_ads')
    }
  } else if (!isGuest) {
    console.error('[Brave Settings Overrides] Routes: could not find SITE_SETTINGS page')
  }
  // Autofill route is moved to advanced,
  // otherwise its sections won't show up when opened.
  if (r.AUTOFILL && r.ADVANCED) {
    r.AUTOFILL.parent = r.ADVANCED
  } else if (!isGuest) {
    console.error('[Brave Settings Overrides] Could not move autofill route to advanced route', r)
  }
  // Deleted performance menu and system menu includes it instead.
  if (r.PERFORMANCE) {
    delete r.PERFORMANCE
  }
  // Safety check route is moved to advanced.
  if (r.SAFETY_CHECK && r.ADVANCED) {
    r.SAFETY_CHECK.parent = r.ADVANCED
  } else if (!isGuest) {
    console.error('[Brave Settings Overrides] Could not move safety check route to advanced route', r)
  }
}
