var header = document.getElementById("header");
        var ms = document.getElementById("models");
        var m3 = document.getElementById("model3");
        var mx = document.getElementById("modelx");
        var my = document.getElementById("modely");
        var mz = document.getElementById("modelz");
        var mw = document.getElementById("modelw");
        var model = document.getElementById("model");
        var info = document.querySelector('.info');

        var carInfo = {
            'Model S': {
                background: 'url(./models.jpg)',
                modelName: 'Model S (Plaid)',
                speed: '1.98s',
                topSpeed: '320 km/hr',
                maxRange: '600 km',
            },
            'Model 3': {
                background: 'url(./model3.jpg)',
                modelName: 'Model 3 (Performance)',
                speed: '3.1s',
                topSpeed: '260 km/hr',
                maxRange: '500 km',
            },
            'Model X': {
                background: 'url(./modelx1.jpg)',
                modelName: 'Model X (Plaid)',
                speed: '2.5s',
                topSpeed: ' 260 km/hr',
                maxRange: '450 km',
            },
            'Model Y': {
                background: 'url(./modely.jpg)',
                modelName: 'Model Y (Performance)',
                speed: '3.5s',
                topSpeed: '250 km/hr',
                maxRange: '480 km',
            },
            'Roadster': {
                background: 'url(./roadster.jpg)',
                modelName: 'Roadster 2',
                speed: '1.9s',
                topSpeed: '400 km/hr',
                maxRange: '800 km',
            },
            'Cyber-Truck': {
                background: 'url(./cybertruck.jpg)',
                modelName: 'Cyber-Truck (Tri-Motor)',
                speed: '3.0s',
                topSpeed: '180 km/hr',
                maxRange: '805 km',
            }
        };

        function updateInfo(carModel) {
            header.style.backgroundImage = carInfo[carModel].background;
            model.innerHTML = carInfo[carModel].modelName;

            info.innerHTML = `
                <div>
                    <h2>${carInfo[carModel].speed}</h2>
                    <h3>60 km/hr</h3>
                </div>
                <div>
                    <h2>${carInfo[carModel].topSpeed}</h2>
                    <h3>Top Speed</h3>
                </div>
                <div>
                    <h2>${carInfo[carModel].maxRange}</h2>
                    <h3>Max range</h3>
                </div>
                <div class="line"></div>
                <div>
                    <h2 id="model">${carInfo[carModel].modelName}</h2>
                </div>
            `;
        }

        ms.onclick = function () {
            updateInfo('Model S');
        }
        m3.onclick = function () {
            updateInfo('Model 3');
        }
        mx.onclick = function () {
            updateInfo('Model X');
        }
        my.onclick = function () {
            updateInfo('Model Y');
        }
        mz.onclick = function () {
            updateInfo('Roadster');
        }
        mw.onclick = function () {
            updateInfo('Cyber-Truck');
        }