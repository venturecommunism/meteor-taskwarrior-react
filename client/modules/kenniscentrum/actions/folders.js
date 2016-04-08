var loadFolderContents = function ({ LocalState, Meteor}, folderName) {
    LocalState.set('FOLDER_CONTENTS_REQUEST', true)
    Meteor.call('_kenniscentrum.loadFolderContentsByName', folderName, (err, data) => {
        if (err) alert('Error loading file contents')

        let newData = {}
        newData[folderName] = data
        LocalState.set('FOLDER_CONTENTS', newData)
        LocalState.set('CURRENT_FOLDER_CONTENT', data)
    })
    LocalState.set('FOLDER_CONTENTS_REQUEST', false)
}

var loadFolderContentsById = function ({ LocalState, Meteor}, folderId) {
    LocalState.set('FOLDER_CONTENTS_REQUEST', true)
    Meteor.call('_kenniscentrum.loadFolderContentsById', folderId, (err, data) => {
        if (err) alert('Error loading file contents')

        console.log('data is', data)

        let receivedData = {}
        receivedData[folderId] = data
        const oldData = LocalState.get('FOLDER_CONTENTS')
        const newData = mergeFolderData(oldData, receivedData)
        LocalState.set('FOLDER_CONTENTS', newData)
        LocalState.set('CURRENT_FOLDER_CONTENT', data)
    })
    LocalState.set('FOLDER_CONTENTS_REQUEST', false)
}

var mergeFolderData = function (oldData, newData) {
    return Object.assign({}, oldData, newData)
}


export default {
    createNewFolder({ LocalState, Meteor, Store }, folderName, allowedUsers) {
        //CREATE FOLDER WITH PERMISSIONS
        const currentUser = Meteor.userId() || '123'



        if (!folderName || !allowedUsers || !currentFolderId ) {
            //TODO: ADD ERROR MESSAGES TO FORMS
            LocalState.set('FOLDER_CREATE_ERROR', 'Foldername, users and parent folder are required!')
        } else {
            LocalState.set('FOLDER_CREATE_ERROR', null)
            LocalState.set('FOLDER_CREATE_REQUEST', true)

            Meteor.call('_kenniscentrum.createFolder', folderName, currentUser, allowedUsers, currentFolderId, (err, res) => {
                if (err) {
                    LocalState.set('FOLDER_CREATE_ERROR', err)
                }
                else {
                    LocalState.set('FOLDER_CREATE_SUCCESS')
                }
            })
        }
        LocalState.set('FOLDER_CREATE_REQUEST', false)
    },

    gotoFolder({FlowRouter}, folderIdentifier) {
        if (folderIdentifier === 'home') return
        else {
            FlowRouter.go('/kenniscentrum/folder?id=' + folderIdentifier)
        }
    },

    folderContentsRequest({ LocalState, Meteor}, folderIdentifier) {
        LocalState.set('FOLDER_CONTENTS_REQUEST', true)
        LocalState.set('CURRENT_FOLDER_CONTENT', null)
        const folderContents = LocalState.get('FOLDER_CONTENT') || false

        console.log('called! with', folderIdentifier)


        if (folderIdentifier === 'home') {
            if (!folderContents[folderIdentifier]) {
                loadFolderContents({LocalState, Meteor}, folderIdentifier)
            } else {
                LocalState.set('CURRENT_FOLDER_CONTENT', folderContents[folderIdentifier])
            }
        } else {
            console.log('called')
            if (!folderContents[folderIdentifier]) {
                console.log('loading data with', folderIdentifier)
                loadFolderContentsById({LocalState, Meteor}, folderIdentifier)
            } else {
                LocalState.set('CURRENT_FOLDER_CONTENT', folderContents[folderIdentifier])
            }
        }
    },

    clearErrors({LocalState}) {
        return LocalState.set('FOLDER_CREATE_ERROR', null)
    },
}