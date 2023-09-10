# jquery-duplicate-fields
jQuery plugin for Dynamically Adding Form Elements

Usage
```
$( '#SelectorId' ).duplicateFields({
    btnRemoveSelector: ".btnRemoveField",
    btnAddSelector:    ".btnAddField"
});
```

Usage with callback 'onCreate'
```
$( '#SelectorId' ).duplicateFields({
    btnRemoveSelector: ".btnRemoveField",
    btnAddSelector:    ".btnAddField",
    onCreate: function( newElement ) {
        let fileInputId = newElement.find( '.fieldClass' ).attr( 'id' );
        newElement.find( '.input-group-text' ).attr( 'for', fileInputId );
    }
});
```

Commands to publish Package
```
# Login Into NPM Registry
export NPM_USERNAME=myusername
export NPM_PASSWORD=mypassword
export NPM_EMAIL=user@domain.com
npm adduser<<!
$NPM_USERNAME
$NPM_PASSWORD
$NPM_EMAIL
!

# Publish Package
npm publish # To publish this package
```
