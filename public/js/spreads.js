//Make an SVG Container
function draw_text(text)
{
  var svgContainer = d3.select("#chart1").selectAll("svg").select("text");
  svgContainer.attr("x", 50).attr("y",50).text(text).html();
  //have 500x500 square
}

function draw_line()
{
  var svgContainer = d3.select("#chart1").select("svg")
  svgContainer.attr("x", 50).attr("y",50).text(text).html();
  //have 500x500 square
}



/*
1. Need to draw the current price on a line`
2. Need to draw two adjustable lines for the high and low limits
3. Need to draw one adjustable lines for the final price
4. Need to calculate everything from it
*/

d3.select("#rg-from1").on("input", function(){
  var currentValue = this.value;
  $("#final_price").html(currentValue)
  draw(currentValue);
})

d3.select("#rg-from2").on("input", function(){
  var currentValue = this.value;
  $("#high_strike").html(currentValue)
  draw(currentValue);
})

d3.select("#rg-from3").on("input", function(){
  var currentValue = this.value;
  $("#low_strike").html(currentValue)
  draw(currentValue);
})

function getquote()
{
  var price = "";
  var stock = $("#stock_symb").val();
  var url = "https://api.iextrading.com/1.0/stock/" + stock + "/book";

    fetch(url).then(function(response) {
      response.json().then(function(json) {
      $("#quote").html(json.quote.symbol + ": " + json.quote.latestPrice);
      $("#final_price").html(json.quote.latestPrice)
  });
});

}

function bullcall()
{
  var msg = "Net Debit: " +
  "Buy Low call " +
  "Sell high call";
  $("#quote").html(msg);
}

function bearcall()
{
  var msg = "Net Credit: " +
  "Sell Low call " +
  "Buy high call";
  $("#quote").html(msg);
}
function bullput()
{
  var msg = "Net Credit: " +
  "Buy Low put " +
  "Sell high put";
  $("#quote").html(msg);
}

function bearput()
{
  var msg = "Net Debit: " +
  "Sell Low put " +
  "buy high put";
    $("#quote").html(msg)
}
