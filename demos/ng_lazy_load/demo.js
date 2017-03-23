var appModule = angular.module('ngLazyApp', []);

    appModule.constant('chunkSize', 50);

    appModule.controller('ngLazyController', function($scope, chunkSize) {
        $scope.stockList = [];

        var currentIndex = 0;
        var todayDate = new Date();
        $scope.loadMoreRecords = function() {
            // Mocking stock values 
            // In an real application, data would be retrieved from an
            // external system
            
            var stock;
            var i = 0;
            while (i < chunkSize) {
                currentIndex++;
                var newDate = new Date();
                newDate.setDate(todayDate.getDate() - currentIndex);
                if (newDate.getDay() >= 1 && newDate.getDay() <= 5) {
                    stock = {
                        dateValue: newDate,
                        price: 20.0 + Math.random() * 10
                    };
                    $scope.stockList.push(stock);
                    i++;
                }
            }
        };

        $scope.loadMoreRecords();
    });

    appModule.directive('whenScrollEnds', function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var visibleHeight = element.height();
                var threshold = 100;

                element.scroll(function() {
                    var scrollableHeight = element.prop('scrollHeight');
                    var hiddenContentHeight = scrollableHeight - visibleHeight;

                    if (hiddenContentHeight - element.scrollTop() <= threshold) {
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenScrollEnds);
                    }
                });
            }
        };
    });