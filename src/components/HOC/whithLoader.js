import React, {Component} from 'react'

const whithLoader = (data)=>(WrappedComponent) => {


    return class WidthLoader extends Component {
        constructor(props) {
            super(props)

            this.state = {}
        }
        
        render(){console.log(this.props[data])
            return(
                this.props[data].length === 0
                    ? <div className="box-loading">
                        <h1 className='loading-text'>Cargando...</h1>
                      </div>
                    : <WrappedComponent {...this.props} />
            )
        }
    }
}

export default whithLoader
