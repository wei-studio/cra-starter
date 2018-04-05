import { loadable } from '../../utils'

export default loadable({ loader: () => import('./index') })