// initializing form selector
$(document).ready(function () {
    $('.tabs').tabs();
    $('.productArea').hide();
    $('.livestockArea').hide();

    // dynamically add cities in NC to dropdown
    var cities = ['ABERDEEN', 'AHOSKIE', 'ALAMANCE', 'ALBEMARLE', 'ALLIANCE', 'ALTAMAHAW-OSSIPEE', 'ANDREWS', 'ANGIER', 'ANSONVILLE', 'APEX', 'ARAPAHOE', 'ARCHDALE', 'ARLINGTON', 'ASHEBORO', 'ASHEVILLE', 'ASHLEY HEIGHTS', 'ASKEWVILLE', 'ATKINSON', 'ATLANTIC BEACH', 'AULANDER', 'AURORA', 'AUTRYVILLE', 'AVERY CREEK', 'AYDEN', 'BADIN', 'BAILEY', 'BAKERSVILLE', 'BALD HEAD ISLAND', 'BALFOUR', 'BANNER ELK', 'BARKER HEIGHTS', 'BARKER TEN MILE', 'BATH', 'BAYBORO', 'BAYSHORE', 'BEARGRASS', 'BEAUFORT', 'BEECH MOUNTAIN', 'BELHAVEN', 'BELMONT', 'BELVILLE', 'BELWOOD', 'BENSON', 'BENT CREEK', 'BERMUDA RUN', 'BESSEMER CITY', 'BETHANIA', 'BETHEL', 'BETHLEHEM', 'BEULAVILLE', 'BILTMORE FOREST', 'BISCOE', 'BLACK CREEK', 'BLACK MOUNTAIN', 'BLADENBORO', 'BLOWING ROCK', 'BOARDMAN', 'BOGER CITY', 'BOGUE', 'BOILING SPRING LAKES', 'BOILING SPRINGS', 'BOLIVIA', 'BOLTON', 'BONNETSVILLE', 'BOONE', 'BOONVILLE', 'BOSTIC', 'BOWMORE', 'BREVARD', 'BRICES CREEK', 'BRIDGETON', 'BROADWAY', 'BROGDEN', 'BROOKFORD', 'BRUNSWICK', 'BRYSON CITY', 'BUIES CREEK', 'BUNN', 'BURGAW', 'BURLINGTON', 'BURNSVILLE', 'BUTNER', 'BUTTERS', "CAJAH'S MOUNTAIN", 'CALABASH', 'CALYPSO', 'CAMERON', 'CANDOR', 'CANTON', 'CAPE CARTERET', 'CAROLINA BEACH', 'CAROLINA SHORES', 'CARRBORO', 'CARTHAGE', 'CARY', 'CASAR', 'CASHIERS', 'CASTALIA', 'CASTLE HAYNE', 'CASWELL BEACH', 'CATAWBA', 'CEDAR POINT', 'CEDAR ROCK', 'CENTERVILLE', 'CERRO GORDO', 'CHADBOURN', 'CHAPEL HILL', 'CHARLOTTE', 'CHERRYVILLE', 'CHIMNEY ROCK', 'CHINA GROVE', 'CHOCOWINITY', 'CLAREMONT', 'CLARKTON', 'CLAYTON', 'CLEMMONS', 'CLEVELAND', 'CLINTON', 'CLYDE', 'COATS', 'COFIELD', 'COLERAIN', 'COLUMBIA', 'COLUMBUS', 'COMO', 'CONCORD', 'CONETOE', 'CONNELLY SPRINGS', 'CONOVER', 'CONWAY', 'COOLEEMEE', 'CORNELIUS', 'COVE CITY', 'CRAMERTON', 'CREEDMOOR', 'CRESWELL', 'CRICKET', 'CROSSNORE', 'CULLOWHEE', 'DALLAS', 'DANBURY', 'DAVIDSON', 'DELWAY', 'DENTON', 'DILLSBORO', 'DOBBINS HEIGHTS', 'DOBSON', 'DORTCHES', 'DOVER', 'DREXEL', 'DUBLIN', 'DUNDARRACH', 'DUNN', 'DURHAM', 'EARL', 'EAST ARCADIA', 'EAST BEND', 'EAST FLAT ROCK', 'EAST LAURINBURG', 'EASTOVER', 'EAST ROCKINGHAM', 'EAST SPENCER', 'EDEN', 'EDENTON', 'ELIZABETH CITY', 'ELIZABETHTOWN', 'ELKIN', 'ELK PARK', 'ELLENBORO', 'ELLERBE', 'ELM CITY', 'ELON COLLEGE', 'ELROD', 'ELROY', 'EMERALD ISLE', 'ENFIELD', 'ENOCHVILLE', 'ERWIN', 'ETOWAH', 'EUREKA', 'EVERETTS', 'FAIR BLUFF', 'FAIRFIELD HARBOUR', 'FAIRMONT', 'FAIRPLAINS', 'FAIRVIEW', 'FAISON', 'FAITH', 'FALCON', 'FALKLAND', 'FALLSTON', 'FARMVILLE', 'FAYETTEVILLE', 'FEARRINGTON', 'FIVE POINTS', 'FLAT ROCK', 'FLAT ROCK', 'FLETCHER', 'FOREST CITY', 'FOREST HILLS', 'FOREST OAKS', 'FORT BRAGG', 'FOUNTAIN', 'FOUR OAKS', 'FOXFIRE', 'FRANKLIN', 'FRANKLINTON', 'FRANKLINVILLE', 'FREMONT', 'FUQUAY-VARINA', 'GAMEWELL', 'GARLAND', 'GARNER', 'GARYSBURG', 'GASTON', 'GASTONIA', 'GATESVILLE', 'GIBSON', 'GIBSONVILLE', 'GLEN ALPINE', 'GLEN RAVEN', 'GODWIN', 'GOLDSBORO', 'GOLDSTON', 'GORMAN', 'GRAHAM', 'GRANDFATHER', 'GRANITE FALLS', 'GRANITE QUARRY', 'GREENEVERS', 'GREEN LEVEL', 'GREENSBORO', 'GREENVILLE', 'GRIFTON', 'GRIMESLAND', 'GROVER', 'HALF MOON', 'HALIFAX', 'HAMILTON', 'HAMLET', 'HARKERS ISLAND', 'HARMONY', 'HARRELLS', 'HARRELLSVILLE', 'HARRISBURG', 'HASSELL', 'HAVELOCK', 'HAW RIVER', 'HAYESVILLE', 'HAYS', 'HEMBY BRIDGE', 'HENDERSON', 'HENDERSONVILLE', 'HERTFORD', 'HICKORY', 'HIGHLANDS', 'HIGH POINT', 'HIGH SHOALS', 'HIGHTSVILLE', 'HILDEBRAN', 'HILLSBOROUGH', 'HOBGOOD', 'HOFFMAN', 'HOLDEN BEACH', 'HOLLY RIDGE', 'HOLLY SPRINGS', 'HOOKERTON', 'HOPE MILLS', 'HOT SPRINGS', 'HUDSON', 'HUNTERSVILLE', 'ICARD', 'INDIAN BEACH', 'INDIAN TRAIL', 'INGOLD', 'IVANHOE', 'JAARS', 'JACKSON', 'JACKSONVILLE', 'JAMES CITY', 'JAMESTOWN', 'JAMESVILLE', 'JEFFERSON', 'JONESVILLE', 'KANNAPOLIS', 'KEENER', 'KELFORD', 'KELLY', 'KENANSVILLE', 'KENLY', 'KERNERSVILLE', 'KILL DEVIL HILLS', 'KING', 'KINGS GRANT', 'KINGS MOUNTAIN', 'KINGSTOWN', 'KINSTON', 'KIRKLAND', 'KITTRELL', 'KITTY HAWK', 'KNIGHTDALE', 'KURE BEACH', 'LA GRANGE', 'LAKE JUNALUSKA', 'LAKE LURE', 'LAKE NORMAN OF CATAWBA', 'LAKE PARK', 'LAKE SANTEETLAH', 'LAKE WACCAMAW', 'LANDIS', 'LANSING', 'LASKER', 'LATTIMORE', 'LAUREL PARK', 'LAURINBURG', 'LAWNDALE', 'LEGGETT', 'LELAND', 'LENOIR', 'LEWISTON WOODVILLE', 'LEWISVILLE', 'LEXINGTON', 'LIBERTY', 'LIGHT OAK', 'LILESVILLE', 'LILLINGTON', 'LINCOLNTON', 'LINDEN', 'LITTLETON', 'LOCUST', 'LONG VIEW', 'LOUISBURG', 'LOVE VALLEY', 'LOWELL', 'LOWESVILLE', 'LUCAMA', 'LUMBER BRIDGE', 'LUMBERTON', 'MCADENVILLE', 'MACCLESFIELD', 'MCDONALD', 'MCFARLAN', 'MCLEANSVILLE', 'MACON', 'MADISON', 'MAGGIE VALLEY', 'MAGNOLIA', 'MAIDEN', 'MANTEO', 'MARIETTA', 'MARION', 'MAR-MAC', 'MARSHALL', 'MARS HILL', 'MARSHVILLE', 'MARVIN', 'MASONBORO', 'MATTHEWS', 'MAXTON', 'MAYODAN', 'MAYSVILLE', 'MEBANE', 'MESIC', 'MICRO', 'MIDDLEBURG', 'MIDDLESEX', 'MILLERS CREEK', 'MILTON', 'MINERAL SPRINGS', 'MINNESOTT BEACH', 'MINT HILL', 'MOCKSVILLE', 'MOMEYER', 'MONROE', 'MONTREAT', 'MOORESBORO', 'MOORESVILLE', 'MORAVIAN FALLS', 'MOREHEAD CITY', 'MORGANTON', 'MORRISVILLE', 'MORVEN', 'MOUNTAIN HOME', 'MOUNTAIN VIEW', 'MOUNT AIRY', 'MOUNT GILEAD', 'MOUNT HOLLY', 'MOUNT OLIVE', 'MOUNT PLEASANT', 'MULBERRY', 'MURFREESBORO', 'MURPHY', 'MURRAYSVILLE', 'MYRTLE GROVE', 'NAGS HEAD', 'NASHVILLE', 'NAVASSA', 'NEUSE FOREST', 'NEW BERN', 'NEWLAND', 'NEW LONDON', 'NEWPORT', 'NEWTON', 'NEWTON GROVE', 'NORLINA', 'NORMAN', 'NORTHLAKES', 'NORTH TOPSAIL BEACH', 'NORTHWEST', 'NORTH WILKESBORO', 'NORWOOD', 'OAKBORO', 'OAK CITY', 'OAK ISLAND', 'OAK RIDGE', 'OCEAN ISLE BEACH', 'OCRACOKE', 'OGDEN', 'OLD FORT', 'ORIENTAL', 'ORRUM', 'OXFORD', 'PANTEGO', 'PARKTON', 'PARMELE', 'PATTERSON SPRINGS', 'PEACHLAND', 'PELETIER', 'PEMBROKE', 'PIKEVILLE', 'PILOT MOUNTAIN', 'PINEBLUFF', 'PINEHURST', 'PINE KNOLL SHORES', 'PINE LEVEL', 'PINETOPS', 'PINEVILLE', 'PINEY GREEN', 'PINK HILL', 'PITTSBORO', 'PLAIN VIEW', 'PLEASANT GARDEN', 'PLEASANT HILL', 'PLYMOUTH', 'POLKTON', 'POLKVILLE', 'POLLOCKSVILLE', 'POPE AFB', 'POWELLSVILLE', 'PRINCETON', 'PRINCEVILLE', 'PROCTORVILLE', 'PROSPECT', 'PUMPKIN CENTER', 'RAEFORD', 'RAEMON', 'RALEIGH', 'RAMSEUR', 'RANDLEMAN', 'RANLO', 'RAYNHAM', 'RED OAK', 'RED SPRINGS', 'REIDSVILLE', 'RENNERT', 'REX', 'RHODHISS', 'RICHFIELD', 'RICHLANDS', 'RICH SQUARE', 'RIVER BEND', 'RIVER ROAD', 'ROANOKE RAPIDS', 'ROBBINS', 'ROBBINSVILLE', 'ROBERSONVILLE', 'ROCKFISH', 'ROCKINGHAM', 'ROCKWELL', 'ROCKY MOUNT', 'ROLESVILLE', 'RONDA', 'ROPER', 'ROSEBORO', 'ROSE HILL', 'ROSMAN', 'ROWLAND', 'ROXBORO', 'ROXOBEL', 'ROYAL PINES', 'RURAL HALL', 'RUTH', 'RUTHERFORD COLLEGE', 'RUTHERFORDTON', 'ST. HELENA', 'ST. JAMES', 'ST. PAULS', 'ST. STEPHENS', 'SALEM', 'SALEMBURG', 'SALISBURY', 'SALUDA', 'SANDY CREEK', 'SANDYFIELD', 'SANFORD', 'SARATOGA', 'SAWMILLS', 'SAXAPAHAW', 'SCOTLAND NECK', 'SEABOARD', 'SEA BREEZE', 'SEAGATE', 'SEAGROVE', 'SEDALIA', 'SELMA', 'SEVEN DEVILS', 'SEVEN LAKES', 'SEVEN SPRINGS', 'SEVERN', 'SHALLOTTE', 'SHANNON', 'SHARPSBURG', 'SHELBY', 'SHERRILLS FORD', 'SILER CITY', 'SILVER CITY', 'SILVER LAKE', 'SIMPSON', 'SIMS', 'SKIPPERS CORNER', 'SMITHFIELD', 'SNEADS FERRY', 'SNOW HILL', 'SOUTHERN PINES', 'SOUTHERN SHORES', 'SOUTH GASTONIA', 'SOUTH HENDERSON', 'SOUTHPORT', 'SOUTH ROSEMARY', 'SOUTH WELDON', 'SPARTA', 'SPEED', 'SPENCER', 'SPENCER MOUNTAIN', 'SPINDALE', 'SPIVEYS CORNER', 'SPRING HOPE', 'SPRING LAKE', 'SPRUCE PINE', 'STALEY', 'STALLINGS', 'STANFIELD', 'STANLEY', 'STANTONSBURG', 'STAR', 'STATESVILLE', 'STEDMAN', 'STEM', 'STOKESDALE', 'STONEVILLE', 'STONEWALL', 'STONY POINT', 'STOVALL', 'SUGAR MOUNTAIN', 'SUMMERFIELD', 'SUNSET BEACH', 'SURF CITY', 'SWANNANOA', 'SWANSBORO', 'SWEPSONVILLE', 'SYLVA', 'TABOR CITY', 'TARBORO', 'TAR HEEL', 'TAYLORSVILLE', 'TAYLORTOWN', 'TEACHEY', 'THOMASVILLE', 'TOAST', 'TOBACCOVILLE', 'TOPSAIL BEACH', 'TRENTON', 'TRENT WOODS', 'TRINITY', 'TROUTMAN', 'TROY', 'TRYON', 'TURKEY', 'UNIONVILLE', 'VALDESE', 'VALLEY HILL', 'VANCEBORO', 'VANDEMERE', 'VANDER', 'VANN CROSSROADS', 'VARNAMTOWN', 'VASS', 'WACO', 'WADE', 'WADESBORO', 'WAGRAM', 'WAKE FOREST', 'WALKERTOWN', 'WALLACE', 'WALNUT COVE', 'WALNUT CREEK', 'WALSTONBURG', 'WANCHESE', 'WARRENTON', 'WARSAW', 'WASHINGTON', 'WASHINGTON PARK', 'WATHA', 'WAXHAW', 'WAYNESVILLE', 'WEAVERVILLE', 'WEBSTER', 'WEDDINGTON', 'WELCOME', 'WELDON', 'WENDELL', 'WENTWORTH', 'WESLEY CHAPEL', 'WEST CANTON', 'WEST JEFFERSON', 'WEST MARION', 'WESTPORT', 'WEST SMITHFIELD', 'WHISPERING PINES', 'WHITAKERS', 'WHITE LAKE', 'WHITE OAK', 'WHITE PLAINS', 'WHITEVILLE', 'WHITSETT', 'WILKESBORO', 'WILLIAMSTON', 'WILMINGTON', 'WILSON', "WILSON'S MILLS", 'WINDSOR', 'WINFALL', 'WINGATE', 'WINSTON-SALEM', 'WINTERVILLE', 'WINTON', 'WOODFIN', 'WOODLAND', 'WOODLAWN', 'WRIGHTSBORO', 'WRIGHTSVILLE BEACH', 'YADKINVILLE', 'YANCEYVILLE', 'YOUNGSVILLE', 'ZEBULON'];
    for (var i = 0; i < cities.length; i++) {
        $('select').append("<option value=" + cities[i] + ">" + cities[i] + "</option>");
    };
    $('select').formSelect();

    // dynamically generate cards with featured vendors (vendors that are users)
    $.get(location.origin + "/api/vendors", function (data) {
        $(".header-here").append(
            `<h4 class='header-font'>Featured Vendors</h4>`);
        for(var i = 620; i<data.length; i++) {
            var vendor = data[i].Vendor;
            var city = data[i].City;
            var phone = data[i].Phone;
            var address = data[i].Address;
            var bio = data[i].Bio;
            var image = data[i].Image;
            var link = ["/vendorProfile/621", "/vendorProfile/622", "/vendorProfile/623"];
            $(".search-results").append(
                `<div class='card'>
                    <div class='flex'>
                        <div class='card-image waves-effect waves-block waves-light'>
                            <img class='activator' src="${image}">
                        </div>
                        <div class="card-content">
                            <span class="header-font card-title activator grey-text text-darken-4">
                                <i class="material-icons right">more_vert</i>
                            </span>
                            <p>
                                <a href="${link[i-620]}">${vendor}</a>
                            </p>
                        </div>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            <i class="material-icons right">close</i>
                        </span>
                        <br>
                        ${address}<br>
                        ${city}<br>
                        ${phone}<br>
                        <br>
                        ${bio}
                    </div>
                </div>`
            );
        };
    });

    //====================================================
    // handiling search results

    // product search
    $('#productButton').on('click', e => {
        e.preventDefault();
        $('.productData').empty();
        let base = location.origin;
        let productName = $('#search_item').val().trim();
        $.get(base + '/api/crops/' + productName, result => {
            for (var i = 0; i < result[0].vendorData.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[0].vendorData[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[0].vendorData[i].Vendor}
                                <br>
                                ${result[0].vendorData[i].Address}
                                <br>
                                ${result[0].vendorData[i].City}
                            </div>
                            <div class="col l5">
                                ${result[0].vendorData[i].Phone}
                                <br> 
                                ${result[0].vendorData[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[0].vendorData[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                               
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();

        });
    });

    //get vendor crops to dispay in collapsible
    $('.productData').on('click', '.product-details', function () {
        var card = $(this).find('.details-results');
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            for (var i = 0; i < result.cropData.length; i++) {
                var p = $("<p>");
                card.append(p.text(result.cropData[i].Name));
            }
        });
    });

    $('.newData').on('click', '.product-details', function () {
        var card = $(this).closest(".collection");
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            for (var i = 0; i < result.Livestock.length; i++) {
                var p = $("<p>");
                card.find('.details-results').append(p.text(result.Livestock[i].Name));
            }
        });
    });

    $('#vendorButton').on('click', e => {
        e.preventDefault();

        $('.productData').empty();
        let base = location.origin;
        let vendorName = $('#vendor').val().trim();
        $.get(base + '/api/vendors/' + vendorName, result => {
            for (var i = 0; i < result.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[i].Vendor}
                                <br>
                                ${result[i].Address}
                                <br>
                                ${result[i].City}
                            </div>
                            <div class="col l5">
                                ${result[i].Phone}
                                <br> 
                                ${result[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                               
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();
        });
    });

    //search by city
    $('#cityButton').on('click', e => {
        e.preventDefault();
        $('.productData').empty();
        let base = location.origin;
        let city = $('#city-name option:checked').val().trim();
        $.get(base + '/api/city/' + city, result => {
            for (var i = 0; i < result.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[i].Vendor}
                                <br>
                                ${result[i].Address}
                                <br>
                                ${result[i].City}
                            </div>
                            <div class="col l5">
                                ${result[i].Phone}
                                <br> 
                                ${result[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                               
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();

        });
    });

    //livestock search
    $('#livestockButton').on('click', e => {
        $('.productData').empty();
        let base = location.origin;
        let livestock = $('#livestock').val().trim();
        $.get(base + '/api/livestock/' + livestock, result => {
           for (var i = 0; i < result[0].vendorData.length; i++) {
                $('.productData').append(
                    `<li class="livestock-details" data-id=${result[0].vendorData[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[0].vendorData[i].Vendor}
                                <br>
                                ${result[0].vendorData[i].Address}
                                <br>
                                ${result[0].vendorData[i].City}
                            </div>
                            <div class="col l5">
                                ${result[0].vendorData[i].Phone}
                                <br> 
                                ${result[0].vendorData[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[0].vendorData[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                               
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.livestockArea').show();
        })
    });

    //showing full list of livestock in collapsible
    $('.productData').on('click', '.livestock-details', function () {
        var card = $(this).find('.details-results');
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        console.log('clicked');
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            console.log(result);
            for (var i = 0; i < result.Livestock.length; i++) {
                var p = $("<p>");
                card.append(p.text(result.Livestock[i].Name));
            }
        });
    });

    // Favorite button
    $('.search-result-data').on('click', '.favorite', function() {
        let vendor = $(this).attr('data-id');
        if ($('.favorite').prop('checked')) {
            // add vendor to favorites in firebase
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).child('favorites').push(vendor);
        } else if (!$('.favorite').prop('checked')) {
            // remove vendor from favorites in firebase
            let favRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid).child('favorites');
            let query = favRef.orderByValue().equalTo(vendor);
            query.once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnap) {
                    favRef.child(childSnap.key).remove();
                });
            });
        };
    });
});