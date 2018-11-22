

export default class MDXContent extends React.Component {
  constructor(props) {
    super(props)
    this.layout = undefined
  }
  render() {
    const { components = {} } = this.props

    return <MDXTag
             name="wrapper"
             
             components={components}><MDXTag name="h1" components={components}>{`This is what we're all about.`}</MDXTag>
<MDXTag name="p" components={components}>{`React, static sites, performance, speed. It's the stuff that makes us tick.`}</MDXTag>
           </MDXTag>
  }
}