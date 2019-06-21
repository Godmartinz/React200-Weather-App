import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class cityInfo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div class="card mb-3">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h1>test</h1>
  </div>
</div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(cityInfo)
