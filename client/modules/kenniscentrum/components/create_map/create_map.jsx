import React from 'react'
import Select from 'react-select'

class CreateMap extends React.Component {
    componentDidMount() {
        //this.props.listUsers()
    }
    render() {
        const { usersList, isFetchingUserList, toggleModal, onFolderChange, onPersonChange, folderName, selectedUsers } = this.props
        return (
            <div className="bg-white">
                <div className="modal-body mtl mal">
                    <label className="f4 tracked black-50">
                        Mapnaam
                    </label>
                    <input name="email"
                           type="email"
                           value={folderName}
                           onChange={onFolderChange}
                           className="modal-body--input mts-l f3 black-60 semibold w-100 plm pvs db ba"></input>

                    <div className="mtl">
                        <label className="f4 tracked black-50">
                            Personen
                        </label>
                        <Select
                            className="mts-l select-users"
                            multi={true}
                            isLoading={isFetchingUserList}
                            value={selectedUsers}
                            onChange={onPersonChange}
                            options={usersList}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateMap