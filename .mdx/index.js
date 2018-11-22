

export default class MDXContent extends React.Component {
  constructor(props) {
    super(props)
    this.layout = undefined
  }
  render() {
    const { components = {} } = this.props

    return <MDXTag
             name="wrapper"
             
             components={components}><MDXTag name="h2" components={components}>{`React Static`}</MDXTag>
<MDXTag name="p" components={components}>{`A `}<MDXTag name="strong" components={components} parentName="p">{`progressive static-site generator`}</MDXTag>{` for React.`}</MDXTag>
<MDXTag name="ul" components={components}>
<MDXTag name="li" components={components} parentName="ul"><MDXTag name="a" components={components} parentName="li" props={{"href":"https://github.com/nozzle/react-static"}}>{`Github`}</MDXTag></MDXTag>
</MDXTag>
<MDXTag name="p" components={components}><MDXTag name="img" components={components} parentName="p" props={{"src":"/logo.png","alt":"React Static","title":"React static logo"}}></MDXTag></MDXTag>
           </MDXTag>
  }
}