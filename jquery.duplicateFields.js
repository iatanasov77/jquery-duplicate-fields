/**
 *  jquery.duplicateFields
 *  version 0.1
 *  author: Ivan I. Atanasov
 *  licensed under the GPL3
 *  https://github.com/iatanasov77/jquery-duplicate-fields
 */

(function ($) 
{
    $.fn.duplicateFields = function (options) 
    {
        var options = $.extend({}, $.fn.duplicateFields.defaults, options);
        
        return this.each(function () 
        {   
            if(!$(this).children().length) {
                createElement($(this));
            }
            
            initButtons($(this));
            bindAddEvent($(this));
            bindRemoveEvent($(this));
        });

        /**
         * Init buttons
         * 
         * @param container
         */
        function initButtons(container)
        {
            container.find(options.btnRemoveSelector).show();
            container.find(options.btnRemoveSelector).last().hide();
            container.find(options.btnAddSelector).hide();
            container.find(options.btnAddSelector).last().show();
        }

        /**
         * Generate new fild on click
         * @param container
         */
        function bindAddEvent(container) 
        {
            container.on("click", options.btnAddSelector, function(event) 
            {
                var newElement = createElement(container, $(this));
                if (typeof options.onCreate === "function") {
                    options.onCreate(newElement, $(this), event);
                }
                initButtons(container);
                
                event.preventDefault();
                return false;
            });
        }

        /**
         * Remove a fild on click
         * @param container
         */
        function bindRemoveEvent(container) 
        {
            container.on("click", options.btnRemoveSelector, function(event) {
                removeElement(container, $(this));
                
                if (typeof options.onRemove === "function") {
                    options.onRemove($(this));
                }
                initButtons(container);
                
                event.preventDefault();
                return false;
            });
        }
        
        /**
         * Create element
         * 
         * @param container
         * @param target
         */
        function createElement(container, target) 
        {
            var newElement = $(container.attr('data-prototype'));
            newElement.find(':input').each(function() {
                var name = $(this).attr('name').replace('__name__', '');
                $(this).attr('name', name);
            });
            container.append(newElement);
            
            return newElement;
        }

        /**
         * Remove element
         * 
         * @param container
         * @param target
         */
        function removeElement(container, target) 
        {
            var elementClass = $(container.attr('data-prototype')).attr('class');
            target.closest('.' + elementClass).remove();
        }
    };
    
    // Set up the default options.
    $.fn.duplicateFields.defaults = {
        btnRemoveSelector: ".btnRemove",
        btnAddSelector:    ".btnAdd",
        onCreate:          false,
        onRemove:          false
    };
})(jQuery);
