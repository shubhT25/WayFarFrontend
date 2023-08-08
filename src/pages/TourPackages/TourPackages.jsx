import React from "react";
import "./main.css";
import "./responsive.css";

const TourPackages = () => {
  const data = [
    {
      Packages: "Family Package",
      Destinations: "UAE - Land of Skyscrapers",
      PackageDetails:
        "1N Burj Khalifa, 1N Dubai Mall, 1N Safari Desert, ₹59640 per head",
      BestTimetoVisit: {
        MarJun: "Yes",
        JulOct: "No",
        NovFeb: "Yes",
      },
    },
    {
      Packages: "Affordable Package",
      Destinations: "India - Incredible Collision of Culture",
      PackageDetails:
        "2N Manali, 2N Shimla, 1N Agra, 2N Jaipur, ₹41250 per head",
      BestTimetoVisit: {
        MarJun: "No",
        JulOct: "Yes",
        NovFeb: "Yes",
      },
    },
    {
      Packages: "Best Seller Package",
      Destinations: "Thailand - A country of contrasts",
      PackageDetails:
        "1N Phuket, 1N Krabi, 1N Bangkok, 2N Similan Island, ₹86000 per head",
      BestTimetoVisit: {
        MarJun: "No",
        JulOct: "No",
        NovFeb: "Yes",
      },
    },
    {
      Packages: "Luxury Package",
      Destinations: "USA - Imperial Cities and High Atlas Mountains",
      PackageDetails:
        "1D DisneyLand Park, 2N Walt Disney World Resort, 3N Island of Hawaii, 4N New York, 1D Grand Canyon National Park, ₹159250 per head",
      BestTimetoVisit: {
        MarJun: "Yes",
        JulOct: "No",
        NovFeb: "Yes",
      },
    },
  ];

  return (
    <main className="package-main">
      <table>
        <caption class="head">Tour Packages</caption>
        <thead>
          <tr>
            <th rowspan="2" scope="col">
              Packages
            </th>
            <th rowspan="2" scope="col">
              Destinations
            </th>
            <th rowspan="2" scope="col">
              Package Details
            </th>
            <th colspan="3" scope="col">
              Best Time to Visit
            </th>
          </tr>
          <tr>
            <th className="qtr" scope="col">
              Mar - Jun
            </th>
            <th class="qtr" scope="col">
              Jul - Oct
            </th>
            <th class="qtr" scope="col">
              Nov - Feb
            </th>
          </tr>
        </thead>
        <tbody id="list">
          {data.map((item) => (
            <tr class="alt1" key={item.Packages}>
              <td> {item.Packages} </td>
              <td> {item.Destinations} </td>
              <td> {item.PackageDetails} </td>
              <td class="wc"> {item.BestTimetoVisit.MarJun} </td>
              <td class="wc"> {item.BestTimetoVisit.JulOct} </td>
              <td class="wc"> {item.BestTimetoVisit.NovFeb} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="content" class="mobile_view">
        <div class="heading">
          <h1 class="head">Tour Packages</h1>
          <hr />
        </div>
        {data.map((item) => (
          <div className={item.Packages + " packages"}>
            <div class="type">
              <h2>{item.Packages}:</h2>
            </div>
            <div class="ingrid">
              <div class="destinations">
                <h3>Destination:</h3>
                <p>{item.Destinations}</p>
              </div>
              <br/>
              <div class="details">
                <h3>Details:</h3>
                <p>{item.PackageDetails}</p>
              </div>
              <br/>
              <div class="bttv">
                <h3>Best time to visit:</h3>
                <p>Mar-Jun: ${item.BestTimetoVisit.MarJun}</p>
                <p>Jul-Oct: ${item.BestTimetoVisit.JulOct}</p>
                <p>Nov-Feb: ${item.BestTimetoVisit.NovFeb}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span class="tag">
        *Included at this price - Hotels, flights, transfers, activities.
      </span>
    </main>
  );
};

export default TourPackages;
