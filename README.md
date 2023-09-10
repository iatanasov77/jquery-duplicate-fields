# jquery-duplicate-fields
jQuery plugin for Dynamically Adding Form Elements

## I. Usage
1. Create the Container
    ```
    <div id="ContainerId"
        data-prototype="<div class="row ">
                            <div class="col-lg-10 mb-3">                                
                                <input type="text" />
                            </div>
                            <div class="col-lg-2  mb-3">
                                <a href="javascript:void(0);" class="btn btn-success btnAddField"><i class="icon_plus_alt2"></i></a>
                                <a href="javascript:void(0);" class="btn btn-danger btnRemoveField"><i class="icon_close_alt2"></i></a>
                            </div>
                        </div>"
    ></div>
    ```

2. Simple Initialize Container
    ```
    $( '#ContainerId' ).duplicateFields({
        btnRemoveSelector: ".btnRemoveField",
        btnAddSelector:    ".btnAddField"
    });
    ```

3. Initialize Container with callback 'onCreate'
    ```
    $( '#ContainerId' ).duplicateFields({
        btnRemoveSelector: ".btnRemoveField",
        btnAddSelector:    ".btnAddField",
        onCreate: function( newElement ) {
            let fileInputId = newElement.find( '.fieldClass' ).attr( 'id' );
            newElement.find( '.input-group-text' ).attr( 'for', fileInputId );
        }
    });
    ```

# II. Commands to publish Package
1. Login Into NPM Registry
    ```
    export NPM_USERNAME=myusername
    export NPM_PASSWORD=mypassword
    export NPM_EMAIL=user@domain.com
    npm adduser<<!
    $NPM_USERNAME
    $NPM_PASSWORD
    $NPM_EMAIL
    !
    ```
2. Publish Package
    ```
    npm publish
    ```