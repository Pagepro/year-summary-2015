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
            }, 10500);
            $interval(function () {
                switcherCouner++;
                if (switcherCouner % 2 == 0) {
                    $scope.switcher = 1;
                } else {
                    $scope.switcher = 2.5;
                }
            }, 600);
        };

        $scope.stop = function() {
            $scope.sound.pause();
        };
    }])
