import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import PositioningMultipleElements from './views/positioning-multiple-elements'
import TheEnd from './views/the-end'
import BuildingLayoutsNavbar from './views/building-layouts-navbar'
import PositioningElements from './views/positioning-elements'
import SelectingElements from './views/selecting-elements'
import HOMME from './views/h-o-m-m-e'
import AddingElements from './views/adding-elements'
import PreviewPublish from './views/preview-publish'
import BuildingLayoutsCardAlignment from './views/building-layouts-card-alignment'
import CONTACT from './views/c-o-n-t-a-c-t'
import StylingElements from './views/styling-elements'
import DesignTokens from './views/design-tokens'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={PositioningMultipleElements}
          path="/positioning-multiple-elements"
        />
        <Route exact component={TheEnd} path="/the-end" />
        <Route
          exact
          component={BuildingLayoutsNavbar}
          path="/building-layouts-navbar"
        />
        <Route
          exact
          component={PositioningElements}
          path="/positioning-elements"
        />
        <Route exact component={SelectingElements} path="/selecting-elements" />
        <Route exact component={HOMME} path="/" />
        <Route exact component={AddingElements} path="/adding-elements" />
        <Route exact component={PreviewPublish} path="/preview-publish" />
        <Route
          exact
          component={BuildingLayoutsCardAlignment}
          path="/building-layouts-card-alignment"
        />
        <Route exact component={CONTACT} path="/c-o-n-t-a-c-t" />
        <Route exact component={StylingElements} path="/styling-elements" />
        <Route exact component={DesignTokens} path="/design-tokens" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
