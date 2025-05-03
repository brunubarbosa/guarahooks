import { Registry } from 'shadcn/registry';

export const hooks: Registry['items'] = [
  {
    name: 'use-window-size',
    type: 'registry:hook',
    title: 'UseWindowSize',
    description: "Tracks the current window's dimensions.",
    files: [
      {
        path: 'registry/hooks/use-window-size.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-window-size.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-media',
    type: 'registry:hook',
    title: 'UseMedia',
    description: 'Checks if the current window matches a media query.',
    files: [
      {
        path: 'registry/hooks/use-media.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-media.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-mouse',
    type: 'registry:hook',
    title: 'UseMouse',
    description: 'Tracks the mouse position in the element and document.',
    files: [
      {
        path: 'registry/hooks/use-mouse.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-mouse.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-keypress',
    type: 'registry:hook',
    title: 'UseKeypress',
    description: 'Tracks keyboard combinations and key presses.',
    files: [
      {
        path: 'registry/hooks/use-keypress.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-keypress.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-orientation',
    type: 'registry:hook',
    title: 'UseOrientation',
    description: 'Tracks the current orientation of the device.',
    files: [
      {
        path: 'registry/hooks/use-orientation.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-orientation.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-toggle',
    type: 'registry:hook',
    title: 'UseToggle',
    description: 'Controls a boolean state with a toggler.',
    files: [
      {
        path: 'registry/hooks/use-toggle.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-toggle.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-set',
    type: 'registry:hook',
    title: 'UseSet',
    description: 'Manages a Set of items with ease.',
    files: [
      {
        path: 'registry/hooks/use-set.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-set.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-map',
    type: 'registry:hook',
    title: 'UseMap',
    description: 'Manages a Map of key/value pairs with ease.',
    files: [
      {
        path: 'registry/hooks/use-map.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-map.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-local-storage',
    type: 'registry:hook',
    title: 'UseLocalStorage',
    description: 'Synchronizes a value with localStorage.',
    files: [
      {
        path: 'registry/hooks/use-local-storage.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-local-storage.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-session-storage',
    type: 'registry:hook',
    title: 'UseSessionStorage',
    description: 'Synchronizes a value with sessionStorage.',
    files: [
      {
        path: 'registry/hooks/use-session-storage.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-session-storage.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-cookie',
    type: 'registry:hook',
    title: 'UseCookie',
    description: 'Synchronizes a value with cookies.',
    files: [
      {
        path: 'registry/hooks/use-cookie.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-cookie.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-copy-to-clipboard',
    type: 'registry:hook',
    title: 'UseCopyToClipboard',
    description: 'Copies text to the clipboard.',
    files: [
      {
        path: 'registry/hooks/use-copy-to-clipboard.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-copy-to-clipboard.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-debounce-callback',
    type: 'registry:hook',
    title: 'UseDebounceCallback',
    description: 'Debounce the call of a function.',
    files: [
      {
        path: 'registry/hooks/use-debounce-callback.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-debounce-callback.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-debounce-state',
    type: 'registry:hook',
    title: 'UseDebounceState',
    description: 'Debounce the state update.',
    files: [
      {
        path: 'registry/hooks/use-debounce-state.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-debounce-state.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-click-outside',
    type: 'registry:hook',
    title: 'UseClickOutside',
    description: 'Detects clicks outside of a referenced element.',
    files: [
      {
        path: 'registry/hooks/use-click-outside.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-click-outside.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-on-mount',
    type: 'registry:hook',
    title: 'UseOnMount',
    description: 'Executes a function only once when the component is mounted.',
    files: [
      {
        path: 'registry/hooks/use-on-mount.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-on-mount.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-on-unmount',
    type: 'registry:hook',
    title: 'UseOnUnmount',
    description:
      'Executes a function only once when the component is unmounted.',
    files: [
      {
        path: 'registry/hooks/use-on-unmount.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-on-unmount.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-did-update',
    type: 'registry:hook',
    title: 'UseDidUpdate',
    description:
      'Executes a function when the component is updated, but not when it is mounted.',
    files: [
      {
        path: 'registry/hooks/use-did-update.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-did-update.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-os',
    type: 'registry:hook',
    title: 'UseOS',
    description: "Detects the user's operating system.",
    files: [
      {
        path: 'registry/hooks/use-os.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-os.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-idle',
    type: 'registry:hook',
    title: 'UseIdle',
    description: 'Detects if the user is idle.',
    files: [
      {
        path: 'registry/hooks/use-idle.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-idle.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-fullscreen',
    type: 'registry:hook',
    title: 'UseFullscreen',
    description: 'Enters and exits fullscreen mode.',
    files: [
      {
        path: 'registry/hooks/use-fullscreen.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-fullscreen.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-confirm',
    type: 'registry:hook',
    title: 'UseConfirm',
    description: 'Manages a confirmation dialog.',
    files: [
      {
        path: 'registry/hooks/use-confirm.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-confirm.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-notifications',
    type: 'registry:hook',
    title: 'UseNotifications',
    description: 'Manages browser notifications.',
    files: [
      {
        path: 'registry/hooks/use-notifications.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-notifications.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-page-leave',
    type: 'registry:hook',
    title: 'UsePageLeave',
    description: 'Detects when the user tries to leave the page.',
    files: [
      {
        path: 'registry/hooks/use-page-leave.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-page-leave.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-disclosure',
    type: 'registry:hook',
    title: 'UseDisclosure',
    description:
      'Manages boolean state for UI components like dialogs, modals, and popovers.',
    files: [
      {
        path: 'registry/hooks/use-disclosure.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-disclosure.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-mutation-observer',
    type: 'registry:hook',
    title: 'UseMutationObserver',
    description: 'Observes changes to the DOM using the Mutation Observer API',
    files: [
      {
        path: 'registry/hooks/use-mutation-observer.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-mutation-observer.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-resize-observer',
    type: 'registry:hook',
    title: 'UseResizeObserver',
    description:
      'Observes size changes of an element using the Resize Observer API',
    files: [
      {
        path: 'registry/hooks/use-resize-observer.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-resize-observer.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-fetch',
    type: 'registry:hook',
    title: 'UseFetch',
    description:
      'Abstracts the Fetch API with loading, error, and data state management.',
    files: [
      {
        path: 'registry/hooks/use-fetch.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-fetch.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-pagination',
    type: 'registry:hook',
    title: 'UsePagination',
    description: 'Hook for controlling list pagination.',
    files: [
      {
        path: 'registry/hooks/use-pagination.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-pagination.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-event-listener',
    type: 'registry:hook',
    title: 'UseEventListener',
    description: 'Manages DOM event listeners with proper cleanup.',
    files: [
      {
        path: 'registry/hooks/use-event-listener.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-event-listener.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-axios',
    type: 'registry:hook',
    title: 'UseAxios',
    description: 'A customizable hook for making HTTP requests with Axios',
    files: [
      {
        path: 'registry/hooks/use-axios.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-axios.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-page-title',
    type: 'registry:hook',
    title: 'UsePageTitle',
    description: 'Modifies the page title dynamically.',
    files: [
      {
        path: 'registry/hooks/use-page-title.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-page-title.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-interval',
    type: 'registry:hook',
    title: 'UseInterval',
    description: 'Runs a callback at specified intervals.',
    files: [
      {
        path: 'registry/hooks/use-interval.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-interval.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-timeout',
    type: 'registry:hook',
    title: 'UseTimeout',
    description: 'Executes a callback after a specified delay.',
    files: [
      {
        path: 'registry/hooks/use-timeout.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-timeout.tsx',
      },
    ],
    categories: ['utilities'],
  },
];
