'use strict';
var app = angular.module('yearSummaryApp', ['ngAudio']);

app.controller('AnimationCtrl', [
    '$scope',
    '$interval',
    '$timeout',
    '$window',
    'ngAudio',
    function ($scope, $interval, $timeout, $window, ngAudio) {
        var counter = -3; // fixed to music tempo
        var switchingInterval;
        $scope.switcherCouner = 1;
        $scope.sound = ngAudio.load("assets/deaf_kev_-_invincible.mp3");
        $scope.logo = false;
        $scope.description = false;
        $scope.gif = false;
        $scope.firstPlay = false;
        $scope.imagesLoaded = 0;
        $scope.loadingInProgress = true;
        $scope.audioLoadingInProgress = true;

        $scope.play = function() {
            $scope.sound.play();
            $scope.logo = true;
            if (!switchingInterval) {
                switchingInterval = $interval(function () {
                    counter++;
                    if (counter % 4 !== 0) {
                        $scope.switcherCouner++;
                    }
                    if ($scope.switcherCouner > 68) {
                        $scope.switcherCouner = 1;
                    }
                }, 300);
            }
        };

        $scope.$watch('sound.currentTime', function () {
            if ($scope.sound.currentTime > 10.7) {
                $scope.firstPlay = true;
            }
        });

        $scope.$watch('sound.audio', function () {
            if ($scope.sound.audio) {
                $scope.$watch('sound.audio.readyState', function () {
                    if ($scope.sound.audio.readyState === 4) {
                        $scope.audioLoadingInProgress = false;
                        $scope.checkLoading();
                    }
                });
            }
        });

        $scope.imageLoaded = function () {
            $scope.imagesLoaded++;
            $scope.checkLoading();
        }

        $scope.checkLoading = function () {
            if ($scope.imagesLoaded == 68 && !$scope.audioLoadingInProgress) {
                $scope.loadingInProgress = false;
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
            $interval.cancel(switchingInterval);
            switchingInterval = undefined;
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
