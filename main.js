//For resetiing/reloading page
$(function () {
  $('#resetBtn').click(function () {
    $('input[type=text]').each(function () {
      var defaultVal = $(this).data('default');
      $(this).val(defaultVal);
    });
    $('input[type="radio"]').prop('checked', false);
  });
});


$(function () {
    $("#datepicker").datepicker();
  });
$(document).ready(function () {
  // $("#datepicker").datepicker({ 
  //         format: 'yyyy-mm-dd',
  //     });
  //     $("#datepicker").on("change", function () {
  //         var fromdate = $(this).val();
  //         alert(fromdate);
  //     });
  
  var i = 1;
  $(document).on('click', '.add', function () {
    var rowCount = $('#dynamic_field >tbody >tr').length;
    console.log("rowCount",rowCount);
    //alert(rowCount);  
    if (rowCount > 16) {
      alert("You Can enter only 16 inputs");
      return false;
    }
    // $('#dynamic_field').append('<tr id="row'+i+'" class="dynamic-added"><td><input type="text" name="sector_no" id="sector_no" size="1" style="border: 1px solid red;margin:0!important"></td><td><input type="text" name="coupon_no" id="coupon_no" size="1" style="border: 1px solid red;margin:0!important"></td><td><input type="text" name="from" id="from" size="7" style="border: 1px solid red;margin:0!important"></td><td><input type="text" name="to" id="to" size="7" style="border: 1px solid red;margin:0!important"></td><td><input type="text" name="cxr" id="cxr" size="4" style="border: 1px solid red;margin:0!important"></td><td><input type="text" name="fb" id="fb" size="10" style="border: 1px solid red;margin:0!important"></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-sm btn-danger btn_remove">-</button></td></tr>');
    $('#dynamic_field').append('<tr id="row' + i + '" class="dynamic-added"><td><input type="text" name="dummy" id="dummy" class="text-uppercase" style="width: 20px"></td><td><input type="text" name="st" id="st" class="text-uppercase"></td><td><input type="text" name="ts" id="ts" class="text-uppercase"></td><td><input type="text" name="docNo" id="docNo" class="text-uppercase" style="width: 79px;"></td><td><input type="text" name="cpnNo" id="cpnNo" class="text-uppercase"></td><td><input type="text" name="sectNo" id="sectNo" class="text-uppercase"></td><td><input type="text" name="origin" id="origin" maxlength="3" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" class="text-uppercase"></td><td><input type="text" name="destination" id="destination" maxlength="3" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" class="text-uppercase" style="width: 30px;"></td><td><input type="text" name="cxr" id="cxr" maxlength="2" onkeypress="return (event.charCode==45) || (event.charCode > 46 && event.charCode < 58) || (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" class="text-uppercase" style="width: 25px;"></td><td><input type="text" name="flightNo" id="flightNo" class="text-uppercase"></td><td><input type="text" name="rbd" id="rbd" class="text-uppercase"></td><td><input type="text" name="flightDate" id="flightDate" class="text-uppercase"style="width: 60px;"></td><td><input type="text" name="fareBasis" id="fareBasis" class="text-uppercase"style="width: 85px;"></td><td><input type="text" name="fcNo" id="fcNo" class="text-uppercase" ></td><td><input type="text" name="fcValue" id="fcValue" class="text-uppercase" style="width: 60px;"></td><td><input type="text" name="btitInd" id="btitInd" class="text-uppercase" ></td><td><input type="text" name="atbpNo" id="atbpNo" class="text-uppercase" style="width: 30px;"></td><td><input type="text" name="atbpValue" id="atbpValue" class="text-uppercase" style="width: 60px;"></td><td><input type="text" name="wm" id="wm" class="text-uppercase" style="width: 35px;"></td><td><input type="text" name="finalProrate" id="finalProrate" class="text-uppercase" style="width:60px;"></td><td><input type="text" name="surcharge" id="surcharge" class="text-uppercase" style="width:70px;"></td><td><input type="text" name="classDiff" id="classDiff" class="text-uppercase" style="width:60px;"></td><td><input type="text" name="proviso" id="proviso" class="text-uppercase" style="width: 60px;"></td><td><input type="text" name="srp" id="srp" class="text-uppercase" style="width: 60px;"></td><td><input type="text" name="mpa" id="mpa" class="text-uppercase" style="width: 60px;"></td><td><input type="text" name="mpaWoProviso" id="mpaWoProviso" class="text-uppercase" style="width:60px;"></td><td><input type="text" name="spa" id="spa" class="text-uppercase" style="width:60px;"></td><td><input type="text" name="netFareProrate" id="netFareProrate" class="text-uppercase" style="width:60px;"></td><td><button type="button" name="add" id="add" class="btn btn-sm btn-success add"><i class="fa fa-plus" aria-hidden="true"></i></button><button type="button" name="remove" id="' + i + '" class="btn btn-sm btn-danger btn_remove"><b>-</b></button></td></tr>');
    i++;
  });

  $(document).on('click', '.btn_remove', function () {
    var rowCount = $('#dynamic_field >tbody >tr').length;    
    //alert(rowCount);
    if (rowCount == 4) {
      alert("You cannot delet entire row");
      return false;
    }
    else
    {
     $(this).closest('tr').remove();
    }
  });
  // end add/remove 16 coupons

  $(document).on('click', '#submit', function (event) {
    fareString = $('#fcaString').val();
    var ticketIndicator = $('.custom-control-input:checked').val();
    var selectedText = $('#datepicker').val();
    // console.log("date", selectedText);

    if (fareString.length <= 14) {
      alert('Your FCA string length is less than 14');
      return false;
    }
    var table = document.getElementById('myTBody');
    console.log("table", table);
    var dataToSend = {};
    var listOfCoupons = [];
    var gfp = {};
    for (var r = 0, n = table.rows.length; r < n; r++) {
      var rowNo = (r + 1);
      var docNo = table.rows[r].cells[3].children[0].value;
      var cpnNo = table.rows[r].cells[4].children[0].value;
      var origin = table.rows[r].cells[6].children[0].value;
      var destination = table.rows[r].cells[7].children[0].value;
      var cxr = table.rows[r].cells[8].children[0].value;
      // var flightNo = table.rows[r].cells[9].children[0].value;
      // var flightDate = table.rows[r].cells[11].children[0].value;
      var fareBasis = table.rows[r].cells[12].children[0].value;

      var obj = {};
      //validation
      if (docNo == '') {
        alert('You must enter document number at row ' + rowNo);
        return false;
      } else if (cpnNo == '') {
        alert('You must enter coupon number at row ' + rowNo);
        return false;
      } else if (origin == '') {
        alert('You must enter origin at row ' + rowNo);
        return false;
      } else if (destination == '') {
        alert('You must enter destination at row ' + rowNo);
        return false;
      } else if (cxr == '') {
        alert('You must enter cxr value at row ' + rowNo);
        return false;
      } else if ((document.ipForm.inlineDefaultRadiosExample[0].checked == false) && (document.ipForm.inlineDefaultRadiosExample[1].checked == false) && (document.ipForm.inlineDefaultRadiosExample[2].checked == false)) {
        alert('You must make one ticket choice');
        return false;
      }else if (selectedText == null || selectedText == "") {
        alert("Please enter date");
        return false;
      }

      obj["origin"] = origin.toUpperCase();
      obj["destination"] = destination.toUpperCase();
      obj["cxr"] = cxr.toUpperCase();
      obj["fareBasis"] = fareBasis.toUpperCase();
      obj["docNo"] = docNo;
      obj["couponNo"] = cpnNo;
      listOfCoupons.push(obj);

    }
    dataToSend["gfp"] = gfp;
    gfp["listOfCoupons"] = listOfCoupons;
    dataToSend["ticketIndicator"] = ticketIndicator;
    dataToSend["fareString"] = fareString.toUpperCase();
    console.log("Data before submit:", JSON.stringify(dataToSend));
    $("input[name='submit']").attr("disabled", true).val("Please wait...").addClass("submit-backg");
    // $("input[name='submit']").attr("disabled", true).val("Please wait...").AddClass('important');
    //process the form
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        // url: 'http://10.245.240.102:8060/smartpra/proration/fca/enrichgfp', // the url where we want to POST
        url: 'http://10.245.240.45:8060/smartpra/proration/fca/enrichgfp', // the url where we want to POST
        // url: 'http://10.245.240.102:8087/proration/fca/enrichgfp', // ZUUL QA env the url where we want to POST
        // url: 'http://10.245.240.45:8087/proration/fca/enrichgfp', // ZUUL  DEV env the url where we want to POST
        // url: 'http://10.111.25.165:8087/proration/fca/enrichgfp', // Barthiban's url.the url where we want to POST
        contentType: "application/json",
        data: JSON.stringify(dataToSend), // our data object


        crossDomain: true
      })
      // using the done promise callback
      .done(function (data, textStatus, xhr) {
        $("input[name='submit']").attr("disabled", false).val("SUBMIT").removeClass("submit-backg");
        // $("input[name='submit']").attr("disabled", false).val("SUBMIT").removeClass('submit-backg');
        // check if couponInfo and ticketLevelInfo is null. if null then display only exceptionerror message
        console.log(arguments);

        //to clear existed data in resultant table 
        // $("#result > tbody > tr > td").parent('tr').empty();
        // To remove existed input
        $("#myTBody>tr").remove();
        $("#second > tr > td").parent('tr').empty();
        // $("#tbError tbody").empty();
        $("#tbError > table > tbody > tr").empty();

        if (xhr.status == 200 && data.couponInfo != null && data.couponInfo.listOfCoupons != null) {
          console.log("Status", xhr.status);
          console.log("success data", data);

          // document.write("success=>",JSON.stringify(data));
          // var couponInfo = data.couponInfo;

          var listOfCoupons = data.couponInfo.listOfCoupons;
          var ticketLevelInfo = data.ticketLevelInfo;
          var exceptionInfo = data.exceptionInfo;

          var basicInfo = "";
          for (var i = 0; i < listOfCoupons.length; i++) {
            var insideCoupons = listOfCoupons[i];
            basicInfo += " <tr>";
            if (insideCoupons.couponType == null) {
              basicInfo += "<td>"+""+"</td>";
            } else {
              basicInfo += "<td>"+insideCoupons.couponType+ "</td>";
              console.log("dummy",basicInfo);
            }

            if (insideCoupons.sideTripFlag == true) {
              basicInfo += "<td>"+"Y"+"</td>";
            } else {
              basicInfo += "<td>" + " " + "</td>";
            }

            if (insideCoupons.transitFlag == true) {
              basicInfo += "<td>" + "X/" + "</td>";
            } else {
              basicInfo += "<td>" + "" + "</td>";
            }

            basicInfo += "<td><input type='text' name='docNo' id='docNo' maxlength='1' value='"+insideCoupons.docNo+"' style='width:79px'/>" + "</td>";
            basicInfo += "<td><input type='text' name='cpnNo' id='cpnNo' value='"+insideCoupons.couponNo+"'/>" + "</td>";
            // basicInfo += "<td><input type='text' value='"+insideCoupons.sectorNo+"'/>" + "</td>";
            basicInfo += "<td>"+insideCoupons.sectorNo+ "</td>";
            basicInfo += "<td><input type='text' type='text' name='origin' id='origin' value='"+insideCoupons.origin+"'/>" + "</td>";
            basicInfo += "<td><input type='text' name='destination' id='destination' value='"+insideCoupons.destination+"'/>" + "</td>";
            basicInfo += "<td><input type='text' name='cxr' id='cxr' value='"+insideCoupons.cxr+"'/>" + "</td>";
            basicInfo += "<td>" + "" + "</td>";
            basicInfo += "<td>" + "" + "</td>";
            basicInfo += "<td>" + "" + "</td>";
            if (insideCoupons.fareBasis == null) {
              basicInfo += "<td><input type='text' value='"+""+"' style='width: 85px;'/>" + "" + "</td>";
            } else {
              basicInfo += "<td><input type='text' value='"+insideCoupons.fareBasis+"' style='width: 85px;'/>" + "</td>";
            }
            basicInfo += "<td>" + insideCoupons.fcNo + "</td>";
            if (insideCoupons.fareComponent == null) {
              basicInfo += "<td>" + "" + "</td>";
            } else {
              basicInfo += "<td>" + insideCoupons.fareComponent + "</td>";
            }
            if (insideCoupons.btitFlag == true) {
              basicInfo += "<td>" + "Y" + "</td>";
            } else {
              basicInfo += "<td>" + "" + "</td>";
            }
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += "<td>" + " "+ "</td>";
            basicInfo += '<td ><button type="button" name="add" id="add" class="btn btn-sm btn-success add"><i class="fa fa-plus" aria-hidden="true"></i></button><button type="button" name="remove" id="remove" class="btn btn-sm btn-danger btn_remove"><b>-</b></button></td>'
            basicInfo += "</tr>";
            basicInfo += "        ";

            // console.log("basicInfo", basicInfo);
          }
          $(".result> tbody:first").append(basicInfo).css({"color":"red"});
           // Get total amount
          
          var totalInfo = "";
          totalInfo += "<tr>";
          totalInfo += "<th colspan='12'>"+ "Total"+"</th>";
          totalInfo += "<td colspan='1'>"+ "SGD"+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1' class='atbpValue'>"+ "2868.33"+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1' class='classDiff'>"+ "409.67"+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1' class='mpa'>"+ "2868.33"+"</td>";
          totalInfo += "<td colspan='1'>"+ ""+"</td>";
          totalInfo += "<td colspan='1' class='netFareProrate'>"+ "190.90"+"</td>";
          totalInfo += "<td colspan='1' class='finalProrate'>"+ "2000.00"+"</td>";
          totalInfo += "</tr>"
          $(totalInfo).insertAfter($('table').find('.total-amount'));
          
          // Get ticket level info details values//
          var tktInfo = "";
          tktInfo += "<tr>";
          tktInfo += "  <th colspan='2'>Total Fare</th>";
          if (ticketLevelInfo.totalFare["currency"] == null) {
            tktInfo += "<td colspan='2'>" + " " + "</td>";
          } else {
            tktInfo += "<td colspan='2'>" + ticketLevelInfo.totalFare["currency"] + "</td>";
          }

          if (ticketLevelInfo.totalFare["totalFareFractionalValue"] == null) {
            tktInfo += "<td colspan='3'>" + " " + "</td>";
          } else {
            tktInfo += "  <td colspan='3'>" + ticketLevelInfo.totalFare["totalFareFractionalValue"] + "</td>";
          }

          tktInfo += "  <td colspan='1'>ROE</td>";
          if (ticketLevelInfo.totalFare["roeFractionalValue"] == null) {
            tktInfo += "<td colspan='2'>" + "" + "</td>";
          } else {
            tktInfo += "  <td colspan='2'>" + ticketLevelInfo.totalFare["roeFractionalValue"] + "</td>";
          }

          tktInfo += "  <td colspan='1'>BT/IT</td>";
          if (ticketLevelInfo.totalFare["btitFlag"] == true) {
            tktInfo += "<td colspan='1'>" + "Y" + "</td>";
          } else {
            tktInfo += "<td colspan='1'>" + "N" + "</td>";
          }

          tktInfo += "<td colspan='1'>INVOL</td>";
          if (ticketLevelInfo.totalFare["involFlag"] == true) {
            tktInfo += "<td colspan='1'>" + "Y" + "</td>";
          } else {
            tktInfo += "<td colspan='1'>" + "N" + "</td>";
          }
          tktInfo += "</tr>";
          tktInfo += "        ";
          $(tktInfo).insertAfter($('table').find('.second-row'));

          //Get Gloabal Indicator value
          var globalInd="";
          globalInd += "<tr>";
          globalInd += "  <th colspan='2'>Journey</th>";
          globalInd += "<td colspan='13'>" + " " + "</td>";
          
          globalInd += "</tr>";
          $(globalInd).insertAfter($('table').find('.globalInd'));


          // Get Surcharge Values
          var surchargeInfo = "";
          var miscCharges = ticketLevelInfo.miscCharges;
          if (miscCharges.surcharge.length > 0) {
            for (var j = 0; j < miscCharges.surcharge.length; j++) {
              surchargeInfo += " <tr>";
              surchargeInfo += " <th colspan='2'>Q Surcharge</th>";
              surchargeInfo += "<td>" + miscCharges.surcharge[j].fcNo + "</td>";
              surchargeInfo += "<td>" + miscCharges.surcharge[j].cityPair + "</td>";
              surchargeInfo += "<td>" + miscCharges.surcharge[j].surchargeAmountFractionalValue + "</td>";
              surchargeInfo += "<td colspan='10'>" + "" + "</td>";
              surchargeInfo += "</tr>";
              surchargeInfo += "";
            }
            $(surchargeInfo).insertAfter($('table').find('.surcharge'));
          } else {
            surchargeInfo += " <tr>";
            surchargeInfo += " <th colspan='2'>Q Surcharge</th>";
            surchargeInfo += "<td colspan='13'>" + "" + "</td>";
            surchargeInfo += "</tr>";
            surchargeInfo += "        ";
            // insert surcharge values//
            $(surchargeInfo).insertAfter($('table').find('.surcharge'));
          }

          // Get ClassDifference Values
          var classDiffInfo = "";
          if (miscCharges.classDifference.length > 0) {
            for (var j = 0; j < miscCharges.classDifference.length; j++) {
              classDiffInfo += " <tr>";
              classDiffInfo += " <th colspan='2'>Class Diff</th>";
              classDiffInfo += "<td>" + "0" + "</td>";
              classDiffInfo += "<td>" + miscCharges.classDifference[j].cityPair + "</td>";
              classDiffInfo += "<td>" + miscCharges.classDifference[j].classDifferenceAmountFractionalValue + "</td>";
              classDiffInfo += "<td colspan='10'>" + "" + "</td>";
              classDiffInfo += "</tr>";
              classDiffInfo += "        ";
            }
            // insert ClassDifference values//
            $(classDiffInfo).insertAfter($('table').find('.classDiffInfo'));
          } else {
            $(classDiffInfo).hide();
          }

          // Get StopOver Values
          var stopOverInfo = "";
          if (miscCharges.stopover.length > 0) {
            for (var j = 0; j < miscCharges.stopover.length; j++) {
              stopOverInfo += " <tr>";
              stopOverInfo += " <th colspan='2'>Stopover</th>";
              stopOverInfo += "<td>" + miscCharges.stopover[j].fcNo + "</td>";
              stopOverInfo += "<td>" + miscCharges.stopover[j].stopoverAmountFractionalValue + "</td>";
              stopOverInfo += "<td colspan='10'>" + "" + "</td>";
              stopOverInfo += "</tr>";
              stopOverInfo += "        ";
            }
            // insert StopOver values//
            $(stopOverInfo).insertAfter($('table').find('.stopover'));
          } else {
            $(stopOverInfo).hide();
          }

          // Get PLus values//
          var plusInfo = "";
          if (miscCharges["plus"] == null) {
            $(plusInfo).hide();
          } else {
            plusInfo += "<tr>";
            plusInfo += "<th colspan='2'>Plus</th>";
            plusInfo += "<td colspan='2'>" + miscCharges["plusFractionalValue"] + "</td>";
            plusInfo += "<td colspan='11'>" + "" + "</td>";
            plusInfo += "<tr>";
            plusInfo += "";
            $(plusInfo).insertAfter($('table').find('.plusInfo'));
          }

          // Get Less values//
          var lessInfo = "";
          if (miscCharges["less"] == null) {
            $(lessInfo).hide();
          } else {
            lessInfo += "  <tr>";
            lessInfo += "  <th colspan='2'>Less</th>";
            lessInfo += "<td colspan='2'>" + miscCharges["lessFractionalValue"] + "</td>";
            lessInfo += "</tr>";
            lessInfo += "";
            $(lessInfo).insertAfter($('table').find('.lessInfo'));
          }

          // Get Plusup values//
          var plusUpInfo = "";
          if (miscCharges["plusup"] == null) {
            $(plusUpInfo).hide();
          } else {
            plusUpInfo += "<tr>";
            plusUpInfo += "<th colspan='2'>Plus Up</th>";
            plusUpInfo += "<td colspan='1'>" + "0" + "</td>";
            plusUpInfo += "  <td colspan='2'>" + miscCharges.plusup["cityPair"] + "</td>";
            plusUpInfo += "<td colspan='2'>" + miscCharges.plusup["plusupAmountFractionalValue"] + "</td>";
            plusUpInfo += "<td colspan='8'>" + " " + "</td>";
            plusUpInfo += "</tr>";
            $(plusUpInfo).insertAfter($('table').find('.plusUpInfo'));
          }
        }

        // if api response is null then display error message and hide rest table info
        else {
          $('#hide-enrich').hide();
          $('.hidden').css("display", "block");
          var exceptionInfo1 = "";
          console.log("exceptionInfo-else-stmt", data.exceptionInfo);
          if (data.exceptionInfo.length > 0) {
            for (var j = 0; j < data.exceptionInfo.length; j++) {
              // exceptionInfo1 += "<p>" + data.exceptionInfo[j].errorDescription + "</p>"+"\n";
              exceptionInfo1 += " <tr>";
              exceptionInfo1 += "<td colspan='15'>" + data.exceptionInfo[j].errorDescription + "</td>";
              exceptionInfo1 += "</tr>";
              exceptionInfo1 += "</tr>";
            }
            $(exceptionInfo1).insertAfter($('.error-result-table').find('.exceptionInfo1'));
            // $(".error-result-table P").append(exceptionInfo1);
            console.log("test");
          }
        }
      })

      .fail(function (data, textStatus, xhr) {
        $("input[name='submit']").attr("disabled", false).val("SUBMIT").removeClass("submit-backg");
        //This shows status code eg. 403
        console.log("error", data.status);
        //This shows status message eg. Forbidden
        console.log("STATUS: " + xhr);

        alert("Your server is reponded as " + data.status);
      });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
});