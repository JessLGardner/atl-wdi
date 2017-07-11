/*//find the button
var $button = $('#add-one');

//add event listener to button
//vanilla
//button.addEventListener('click', function () {
//});
//jQuery
button.on('click', function () {

//inside listener callback

    //find span to get current value
    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);
    
    //add one to current span
    currentValueAsInt += 1;

    //change span to new value
    //vanilla
    document.getElementById('current-count').innerHTML = currentValueAsInt;
    //jQuery
    $('#current-count').html(currentValueAsInt);

});
*/



$(function() {
    
    var CounterCollection = {
        counters: [
            {
                currentValue: 0,
                counterName: 'Errors'
            },
            {
                currentValue: 0,
                counterName: 'Warnings'

            }
        ]
    }

    // find counter container
    var $counterContainer = $('#counter-container');

    // loop through the user's counters
    for (var i = 0; i < CounterCollection.counters.length; i++) {

        //get current counter object
        var counter = CounterCollection.counters[i];

        // for each counter create div
        var $newCounterDiv = $('<div>');

        // div should have a class of counter
        $newCounterDiv.addClass('counter');

        // div should have data-counter-index 
        //that equals the current index of the array
        $newCounterDiv.data('counterIndex', i)

        // div should have header with counter name
        $newCounterDiv.append('<h1>').append(counter.counterName);

        //div should have span containing currentValue
        $newCounterDiv.append('<span>').append(counter.currentValue);

        //div should have button with id of 'add-one'
        var $plusOneButton = $('<button>');
            $plusOneButton.html('+1');
            $plusOneButton.attr('id', 'add-on');
        $newCounterDiv.append($plusOneButton);

        // add button to remove counter
        var $removeButton = $('<button>');
            $removeButton.html('Remove Counter');
            $removeButton.attr('id', 'remove-counter');
        $newCounterDiv.append($removeButton);

        $newCounterDiv.on('click', function(event) {
            event.stopPropgation();
            if(event.target.id === 'remove-counter') {
                $(event.currentTarget).remove();
            }
        })


        //div should be append to counter container
        $counterContainer.append($newCounterDiv);
    };




    //find the button
    var $button = $('#add-one');

    // add an event listener to the button
    $button.on('click', function () {
    // then, inside the listener callback:

        // find the span to get the current value
        var currentValue = $('#current-count').text();
        var currentValueAsInt = parseInt(currentValue);

        // add one to the current span value
        currentValueAsInt += 1;

        // change the span to the new value
        $('#current-count').html(currentValueAsInt);
    });

    //find button on form
    var $newCounterButton = $('#add-new-counter');

    //add event listener
    $newCounterButton.on('click', function(event) {

        //stop refresh
        event.preventDefault();

        //find value of counter name
        var newCounterName = $('#new-counter-name').val();

        //find value of counter name
        var newCounterStartValue = $('#new-counter-start-name').val();


        /*  //alert both
        alert('New Counter Name: ' + newCounterName);
        alert(`New Counter Start Value: ${newCOunterStartValue}`);
        */

    });



//click button
//alert the data
//stop page refreshing