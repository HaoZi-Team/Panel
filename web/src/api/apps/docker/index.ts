import { http } from '@/utils'

export default {
  getConfig: (): any => http.Get('/apps/docker/config'),
  updateConfig: (config: string): any => http.Post('/apps/docker/config', { config })
}
