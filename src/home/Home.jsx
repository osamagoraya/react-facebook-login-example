import React, { useState, useEffect } from 'react';
import { accountService } from '_services';
import MUIDataTable from "mui-datatables";

function createData(audience_number, audience_name, approximate_count) {
    return { audience_number, audience_name, approximate_count };
  }
  
  const data = [
    createData('6231193802291', 'דומה (GB, 1%) - add-to-wishlist-30', 530000),
    createData('6231167400291', 'add-to-wishlist-30', -1),
    createData('6231167317691', 'דומה (DE, 1%) - customers-list-02-21', 2400000),
    createData('6229558941691', 'דומה (US, 1%) - customers-list-02-21', 510000),
    createData('6227549418291', 'דומה (GB, 1%) - customers-list-02-21', 27000000),
    createData('6227549339491', 'customers-list-02-21', 1500),
    createData('6226167549891', 'Lookalike (GB, 5%) - custom cart visitors', 33000),
    createData('6226167466491', 'Lookalike (GB, 1%) - custom cart visitors', 1000),
    createData('6226167424691', 'Lookalike (Worldwide, 1%) - ruta-eu.myshopify.com - פיקסל פייסבוק using AddToCart', 530000),
    createData('6226167405691', 'custom cart visitors', -1),
    createData('6224307476291', 'דומה (LT, LV, 1%) - Ruta-Shop Clients  -israel - 31/1/21', 530000),
    createData('6224291592891', 'דומה (US, 1%) - Ruta-Shop Clients  -israel - 31/1/21', 22000),
    createData('6224291389491', 'דומה (GB, 1%) - Ruta-Shop Clients  -israel - 31/1/21', 4400000),
    createData('6224289553291', 'Ruta-Shop Clients  -israel - 31/1/21', 2300000),
    createData('6223569959091', 'Lookalike (GB, 1%) - custom cart page - without purchases', 2300000),
    createData('6223569726691', 'Lookalike (LT, 1%) - custom cart page - without purchases', -1),
    createData('6223569598091', 'Lookalike (Europe, 1%) - custom cart page - without purchases', 1000),
    createData('6223569488891', 'Lookalike (Euro area, 1%) - ruta-eu.myshopify.com - פיקסל פייסבוק using AddToCart', 1000),
    createData('6222968200291', 'Lookalike (Euro area, 1%) - AddToCart 90 ruta.store', 10000),
    createData('6222968063491', 'Ruta-Shop Clients - 28.1.2021', -1),
    createData('6222967978291', 'top 25% visitors for last 14 days - ruta.store', -1),
    createData('6222963833691', 'top 25% visitors in the last 7 days', 1500),
    createData('6222963281091', 'דומה (US, 1%) - Website Visitors', 7000),
    createData('6222961184691', 'Website Visitors', 42000),
    createData('6220763342691', 'דומה (GB, 1%) - purchase 180 days ruta-shop', 9600),
    createData('6220188297291', 'דומה (US, 1%) - purchase 180 days ruta-shop', 1000),
    createData('6219352228291', 'purchase 180 days ruta-shop', 1000),
    createData('6219352224891', 'custom cart page - without purchases', 1000),
    createData('6218884195691', 'דומה (GB, 1%) - AddToCart 90 ruta.store', 1000),
    createData('6218884046691', 'דומה (US, 1%) - AddToCart 90 ruta.store', 1000)
  
  ];

  const columns = [
    {
     name: "audience_number",
     label: "Audience Number",
     options: {
      filter: true,
      sort: true,
      setCellProps: value => {
        return {
          style: {
            align: 'left'
          }
        };
      },
     }
    },
    {
     name: "audience_name",
     label: "Audience Name",
     options: {
      filter: true,
      sort: false,
      setCellProps: value => {
        return {
          style: {
            align: 'left'
          }
        };
      },
     }
    },
    {
     name: "approximate_count",
     label: "Approximate Count",
     options: {
      filter: true,
      sort: false,
      setCellProps: value => {
        return {
          style: {
            align: 'left'
          }
        };
      },
     }
    },
   ];
   
   const options = {
     filterType: 'checkbox',
     download: false,
     print: false,
     viewColumns: false,
     rowsPerPage: 8
   };

function Home() {
    const [mounted, setMounted] = useState(false);
    const [accounts, setAccounts] = useState(null);
    useEffect(() => {
        setMounted(true);
        accountService.getAll().then(x => setAccounts(x));

        return () => setMounted(false);
    }, []);
    return (
        <div>
            <h2>Please choose the audience that you wish Algotarget will analyse</h2>
            <MUIDataTable
                title={"Audiences"}
                data={data}
                columns={columns}
                options={options}
            />
            <button style={{marginLeft: "93%", marginTop: "1%"}} className="btn btn-primary btn-md" onClick={()=>{}}>
                Submit
            </button>
        </div>
    )
}

export { Home };