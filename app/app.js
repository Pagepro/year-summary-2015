var app = angular.module('yearSummaryApp', ['ngAudio']);

app.controller('AnimationCtrl', [
    '$scope',
    '$interval',
    '$timeout',
    '$window',
    'ngAudio',
    function ($scope, $interval, $timeout, $window, ngAudio) {
        var switcherCouner = 0;
        $scope.sound = ngAudio.load("assets/DEAF_KEV_-_Invincible.mp3");
        $scope.logo = false;
        $scope.description = false;
        $scope.gif = false;
        $scope.switcher = 0;
        $scope.firstPlay = false;

        $scope.play = function() {
            $scope.sound.play();
            $scope.logo = true;
            $timeout(function () {
                $scope.logo = false;
                $scope.description = true;
            }, 4000);
            $timeout(function () {
                $scope.description = false;
                $scope.gif = true;
                $scope.firstPlay = true;
            }, 10800);
        };

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
