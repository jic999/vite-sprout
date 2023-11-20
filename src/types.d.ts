import type { DialogProviderInst, LoadingBarProviderInst, MessageProviderInst, NotificationProviderInst } from 'naive-ui'

export {}

declare module 'vue' {
  interface HTMLAttributes {
    [key: string]: unknown
  }
}

declare global {
  const $message: MessageProviderInst
  const $loadingBar: LoadingBarProviderInst
  const $dialog: DialogProviderInst
  const $notification: NotificationProviderInst

  interface Window {
    $message: MessageProviderInst
    $loadingBar: LoadingBarProviderInst
    $dialog: DialogProviderInst
    $notification: NotificationProviderInst
  }
}
