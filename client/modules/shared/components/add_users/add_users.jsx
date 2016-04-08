import React from 'react'
import Select from 'react-select'

class AddUsers extends React.Component {
    constructor() {
        super(props)
        this.state = {
            values: [

            ]
        }
    }
    render() {
        const { loadOptions, onUserClicked } = this.props
        return (
            <Select.Async
                className="mts-l select-users"
                multi={true}
                value={this.state.values}
                onChange={this.onChange}
                onValueClick={onUserClicked}
                valueKey="github"
                labelKey="name"
                loadOptions={loadOptions}/>
        )
    }
}

export default AddUsers