import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://str3dlok.com',
  title: 'Str3Dlok',
  subtitle: '🚀 QWER - Built using Svelte with ❤',
  description: 'Str3Dlok is learnind and teaching about Blender, Unreal and all in-between',
  lang: 'en',
  timeZone: 'Madrid/Spain',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Str3Dlok',
    status: '🕹️',
    statusTip:
      '<a href="https://github.com/SrGeneroso/str3dlok-qwer" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Made by SRG !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://str3dlok.com/',
    github: 'https://github.com/SrGeneroso/str3dlok-qwer',
    email: 'str3dlok@gmail.com',
    bio: `Imma pickle <br/> Pickle Rick!!`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://str3dlok.com/'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          // `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          // `<script type="text/partytown">
          //   window.dataLayer = window.dataLayer || [];
          //   function gtag(){dataLayer.push(arguments);}
          //   gtag('js', new Date());
          //   gtag('config', 'G-LQ73GWF6XT');
          // </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

export const giscusConfig: Giscus.Config = {
  // src: 'https://giscus.kwchang0831.dev/client.js',
  enable: true,
  id: 'giscus-comment',
  repo: 'SrGeneroso/str3dlok-qwer',
  repoId: 'R_kgDOIKEbJg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOIKEbJs4CR2qQ',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'See Docs 📄',
    url: 'https://docs-svelte-qwer.vercel.app/',
    rel: 'external',
  },
  {
    name: 'Get QWER 🚀',
    url: 'https://github.com/kwchang0831/svelte-QWER',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'See Docs 📄',
      url: 'https://docs-svelte-qwer.vercel.app/',
      rel: 'external',
    },
    {
      name: 'Get QWER 🚀',
      url: 'https://github.com/kwchang0831/svelte-QWER',
      rel: 'external',
    },
  ],
};
