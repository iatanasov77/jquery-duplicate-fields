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
npm adduser # To authorize this machine
npm publish # To publish this package
```
