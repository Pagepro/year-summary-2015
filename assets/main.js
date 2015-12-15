function gifCreator () {
    gifshot.createGIF({
        images: [
            'assets/frames/2015-02-17_1424200664.jpg',
            'assets/frames/2015-02-17_1424200754.jpg',
            'assets/frames/2015-02-17_1424200955.jpg',
            'assets/frames/2015-02-17_1424201040.jpg',
            'assets/frames/2015-02-17_1424201121.jpg',
            'assets/frames/2015-02-17_1424201287.jpg',
            'assets/frames/2015-02-19_1424345339.jpg',
            'assets/frames/2015-02-21_1424523172.jpg',
            'assets/frames/2015-02-27_1425041443.jpg',
            'assets/frames/2015-02-27_1425066659.jpg',
            'assets/frames/2015-02-28_1425113738.jpg',
            'assets/frames/2015-03-01_1425210464.jpg',
            'assets/frames/2015-03-01_1425210682.jpg',
            'assets/frames/2015-03-02_1425303388.jpg',
            'assets/frames/2015-03-04_1425505593.jpg',
            'assets/frames/2015-03-04_1425505631.jpg',
            'assets/frames/2015-03-04_1425505653.jpg',
            'assets/frames/2015-03-04_1425505704.jpg',
            'assets/frames/2015-03-13_1426258097.jpg',
            'assets/frames/2015-03-21_1426967832.jpg',
            'assets/frames/2015-03-21_1426968073.jpg',
            'assets/frames/2015-03-31_1427834290.jpg',
            'assets/frames/2015-03-31_1427834387.jpg',
            'assets/frames/2015-03-31_1427834444.jpg',
            'assets/frames/2015-04-03_1428063391.jpg',
            'assets/frames/2015-04-03_1428064343.jpg',
            'assets/frames/2015-04-25_1429987865.jpg',
            'assets/frames/2015-04-25_1429987912.jpg',
            'assets/frames/2015-04-25_1429987938.jpg',
            'assets/frames/2015-04-25_1429988119.jpg',
            'assets/frames/2015-04-25_1429988143.jpg',
            'assets/frames/2015-04-25_1429988253.jpg',
            'assets/frames/2015-05-06_1430939454.jpg',
            'assets/frames/2015-05-14_1431600004.jpg',
            'assets/frames/2015-06-03_1433354781.jpg',
            'assets/frames/2015-06-04_1433429819.jpg',
            'assets/frames/2015-06-10_1433962335.jpg',
            'assets/frames/2015-06-19_1434740006.jpg',
            'assets/frames/2015-06-26_1435320390.jpg',
            'assets/frames/2015-06-26_1435320432.jpg',
            'assets/frames/2015-06-26_1435320460.jpg',
            'assets/frames/2015-07-09_1436445266.jpg',
            'assets/frames/2015-07-19_1437301595.jpg',
            'assets/frames/2015-07-19_1437301631.jpg',
            'assets/frames/2015-07-19_1437301710.jpg',
            'assets/frames/2015-07-19_1437301736.jpg',
            'assets/frames/2015-08-01_1438448845.jpg',
            'assets/frames/2015-08-16_1439728965.jpg',
            'assets/frames/2015-08-16_1439728992.jpg',
            'assets/frames/2015-09-13_1442150560.jpg',
            'assets/frames/2015-09-13_1442150605.jpg',
            'assets/frames/2015-09-13_1442150669.jpg',
            'assets/frames/2015-09-23_1442992579.jpg',
            'assets/frames/2015-10-08_1444331849.jpg',
            'assets/frames/2015-10-08_1444332152.jpg',
            'assets/frames/2015-10-16_1444998399.jpg',
            'assets/frames/2015-10-21_1445414167.jpg',
            'assets/frames/2015-10-21_1445414381.jpg',
            'assets/frames/2015-10-21_1445414389.jpg',
            'assets/frames/2015-10-21_1445414394.jpg',
            'assets/frames/2015-10-21_1445414484.jpg',
            'assets/frames/2015-11-19_1447928946.jpg',
            'assets/frames/2015-11-23_1448291694.jpg',
            'assets/frames/2015-11-23_1448291773.jpg',
            'assets/frames/2015-12-04_1449232593.jpg',
            'assets/frames/2015-12-04_1449232640.jpg',
            'assets/frames/2015-12-04_1449232663.jpg',
            'assets/frames/2015-12-04_1449232717.jpg'
        ],
        gifWidth: 500,
        gifHeight: 500
    }, function (obj) {
        if (!obj.error) {
            var image = obj.image, animatedImage = document.createElement('img');
            animatedImage.src = image;
            // document.getElementById('gif-holder').appendChild(animatedImage);
        }
    });
}