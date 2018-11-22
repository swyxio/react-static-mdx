

export default class MDXContent extends React.Component {
  constructor(props) {
    super(props)
    this.layout = undefined
  }
  render() {
    const { components = {} } = this.props

    return <MDXTag
             name="wrapper"
             
             components={components}><MDXTag name="hr" components={components}></MDXTag>
<MDXTag name="p" components={components}>{`title: Another post`}</MDXTag>
<MDXTag name="h2" components={components}>{`slug: another-post`}</MDXTag>
<MDXTag name="p" components={components}>{`Content...`}</MDXTag>
           </MDXTag>
  }
}