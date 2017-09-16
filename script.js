(function(angular){
    
    angular.module('drag', []).

    directive('draggable', function($document){

        return function(scope, element, attr){

            var startX = 0, startY = 0, x = 0, y  = 0;

            element.css({
                position: 'relative',
                cursor: 'pointer',
                width: '65px'
            });

            element.on('mousedown', function(event){
                event.preventDefault();
                startX = event.screenX - x;
                startY = event.screenY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {

                y = event.screenY - startY;
                x = event.screenX - startX;

                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });  
                
                console.log(x);
                console.log(y);
                
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
                var body = $(document).find('body').eq(0);
                var label = angular.element('<div>The element was moved</div>');
                body.append(label);
            }
            
        };
        
    });
    
})(window.angular);