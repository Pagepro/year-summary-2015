var app = angular.module('yearSummaryApp', ['ngAudio']);

app.controller('AnimationCtrl', [
    '$scope',
    '$interval',
    '$timeout',
    '$window',
    'ngAudio',
    function ($scope, $interval, $timeout, $window, ngAudio) {
        $scope.sound = ngAudio.load("sounds/DEAF_KEV_-_Invincible.mp3");

        $scope.play = function() {
            $scope.sound.play();
        };

        $scope.stop = function() {
            $scope.sound.pause();
        };
    }])
