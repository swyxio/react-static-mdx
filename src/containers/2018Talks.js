import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import { Helmet } from 'react-helmet'
import Signup from './Signup'

const sortTalk = (a, b) => {
  var topicA = a.topic.toLowerCase(),
    topicB = b.topic.toLowerCase()
  if (topicA < topicB)
    //sort string ascending
    return -1
  if (topicA > topicB) return 1
  return 0 //default return value (no sorting)
}

function TalkComponent(talk, i) {
  const maybe = (x, fx) => x && fx(x)
  return (
    <li key={i}>
      <pre
        style={{
          display: 'inline',
          margin: 5,
          // marginRight: 5,
          border: '1px solid blue',
        }}
      >
        {talk.topic}
      </pre>
      <span className="list-item__title">
        <Link to={`/talks/${talk.slug}`}>{talk.title}</Link>
      </span>
      {' @ '}
      <em>{talk.venues}</em>
      {/* {maybe(talk)} */}
    </li>
  )
}

// export default withRouteData(({ bio, pending }) => (
export default withRouteData((props) => {
  const { recentTalks } = props
  // console.log(recentTalks);
  return (
    <section className="row padding padding-size-large">
      <Helmet>
        <meta charSet="utf-8" />
        <title>swyx.io | Talks</title>
        <link rel="canonical" href="https://swyx.io/talks" />
      </Helmet>
      <aside className="column column-size-large-3 column-size-small-12">
        <h1>2018 Talks</h1>
      </aside>
      <div className="column column-size-large-6 column-size-small-12 writing-page__content">
        <ul>{recentTalks.sort(sortTalk).map(TalkComponent)}</ul>
        <Signup />
      </div>
      <aside className="column column-size-large-3 column-size-small-12 writing-page__sidebar-right">
        <p>
          <small>
            <em>
              see <Link to="/talks/pending">pending talks</Link>
            </em>
          </small>
        </p>
        <p>
          <small>
            <em>
              see <Link to="/talks">recent talks</Link>
            </em>
          </small>
        </p>
      </aside>
    </section>
  )
})
