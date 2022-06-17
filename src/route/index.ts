import { useRoutes } from 'react-router-dom'
import routes from './routesConfig'

const Routes = () => {
  const routesElements = useRoutes(routes)
  return routesElements
}

export default Routes
