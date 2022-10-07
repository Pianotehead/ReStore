import {
  Grid, Paper} from "@mui/material";
import classes from './Catalog.module.css';
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchFilters, fetchProductsAsync,
  productSelectors, setPageNumber, setProductParams
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckBoxButtons from "../../app/components/CheckBoxButtons";
import AppPagination from "../../app/components/AppPagination";

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price - High to low' },
  { value: 'price', label: 'Price - Low to high' }
]

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded,
    brands, types, productParams, metaData
  } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);
  // If prodsLoaded and filtersLoaded in the same useEffect = BAD. Means prods
  // ...are fetched, which changes the dependency productsLoaded, which fires
  // ...off another useEffect, and therefore products loaded again, along with...
  // ...the filters. Therefore have to move filters fetching to it's own useEffect
  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (!filtersLoaded) return <LoadingComponent message='Loading products...' />

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            options={sortOptions}
            onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
          />

          <Paper sx={{ mb: 2, p: 2 }} className={classes.noBorder}>
            <CheckBoxButtons
              items={brands}
              checked={productParams.brands}
              onChange={(items: string[]) => dispatch(setProductParams({
                brands: items
              }))}
            />
          </Paper>
          <Paper sx={{ mb: 2, p: 2 }} className={classes.noBorder}>
            <CheckBoxButtons
              items={types}
              checked={productParams.types}
              onChange={(items: string[]) => dispatch(setProductParams({
                types: items
              }))}
            />
          </Paper>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={9} sx={{ mb: 2 }}>
        {metaData &&
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) => dispatch(setPageNumber({
              pageNumber: page
            }))}
          />
        }

      </Grid>
    </Grid>
  )
}