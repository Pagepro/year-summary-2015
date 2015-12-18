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
        $scope.switcherCouner = 0;
        $scope.sound = ngAudio.load("assets/deaf_kev_-_invincible.mp3");
        $scope.sound.audio = $scope.sound.audio || new Audio();
        $scope.firstPlay = false;
        $scope.imagesLoaded = 0;
        $scope.framesCount = 0;
        $scope.loadingInProgress = true;
        $scope.audioLoadingInProgress = true;

        $timeout(function () { // re init loading audio file, because iOS Safari sometimes have problems with loading
            if (!$scope.sound.audio.readyState) {
                console.debug('reinit ngAudio...');
                $scope.sound = ngAudio.load("assets/deaf_kev_-_invincible.mp3");
                $scope.sound.audio = $scope.sound.audio || new Audio();
            }
        }, 3000);

        $scope.play = function() {
            $scope.sound.play();
            if (!switchingInterval) {
                switchingInterval = $interval(function () { // switch frame every 600ms (should be related to music tempo)
                    counter++;
                    if (counter % 4 !== 0) { // don't switch frame every 4 beats (interval repeats)
                        $scope.switcherCouner++;
                    }
                    if ($scope.switcherCouner > $scope.framesCount) {
                        $scope.switcherCouner = 1;
                    }
                }, 300);
            }
        };

        $scope.$watch('sound.currentTime', function () {
            if ($scope.sound.currentTime > 10.7) { // set to true when slides showed for first time. It is in watch function, because slow connections have problems with audio and times can be different
                $scope.firstPlay = true;
            }
        });

        $scope.$watch('sound.audio.readyState', function () { // watch progress of audio loading. 4 means finished.
            if ($scope.sound.audio.readyState > 0) {
                $scope.audioLoadingInProgress = false;
                $scope.checkLoading();
            }
        });

        $scope.imageLoaded = function () {
            $scope.imagesLoaded++;
            $scope.checkLoading();
        }

        $scope.checkLoading = function () {
            if ($scope.imagesLoaded == $scope.framesCount && !$scope.audioLoadingInProgress) {
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

        $scope.stop = function () {
            $scope.sound.pause();
            $interval.cancel(switchingInterval);
            switchingInterval = undefined;
        };

        $scope.init = function () {
            var imgs = document.getElementsByTagName('img');
            var my_script = document.createElement('script');
            my_script.setAttribute('src','https://buttons.github.io/buttons.js');
            my_script.setAttribute('id','github-bjs');
            document.body.appendChild(my_script);
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].className === "frame") {
                    $scope.framesCount++;
                }
            }

        }

        $scope.init();
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
