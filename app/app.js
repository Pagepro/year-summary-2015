'use strict';
var app = angular.module('yearSummaryApp', ['ngAudio']);

app.controller('AnimationCtrl', [
    '$scope',
    '$interval',
    '$timeout',
    '$window',
    'ngAudio',
    function ($scope, $interval, $timeout, $window, ngAudio) {
        var switcherCouner = 0;
        $scope.sound = ngAudio.load("assets/deaf_kev_-_invincible.mp3");
        console.log($scope.sound);
        $scope.logo = false;
        $scope.description = false;
        $scope.gif = false;
        $scope.switcher = false;
        $scope.firstPlay = false;
        $scope.imagesLoaded = 0;
        $scope.imagesLoadingInProgress = true;

        $scope.play = function() {
            $scope.sound.play();
            $scope.logo = true;
            $interval(function () {
                switcherCouner++;
                if (switcherCouner % 2 === 0) {
                    $scope.switcher = false;
                } else {
                    $scope.switcher = true;
                }
            }, 600);
        };

        $scope.$watch('sound.currentTime', function () {
            if ($scope.sound.currentTime > 10700)
            $scope.firstPlay = true;
        })

        $scope.imageLoaded = function () {
            $scope.imagesLoaded++;
            if ($scope.imagesLoaded == 68) {
                $scope.imagesLoadingInProgress = false;
            }
        }

        $scope.toggleMusic = function () {
            if ($scope.sound.paused) {
                $scope.play();
            } else {
                $scope.stop();
            }
        };

        $scope.stop = function() {
            $scope.sound.pause();
        };
    }])

app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});
