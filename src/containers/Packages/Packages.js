import React, { Component } from "react";
import classes from './Packages.module.css'
import Package from "../../components/Package/Package";

class Packages extends Component {
  state = {
    packages : [
      {
        slogan: 'Сказочное заморское яство',
        foodName: 'Нямушка',
        taste: 'с фуа-гра',
        numberPortions: '10',
        portions: 'порций',
        numberPresent: undefined,
        present: 'мышь в подарок',
        extraText: undefined,
        amountFood: '0,5',
        unit: 'кг',
        bottomText: 'Чего сидишь? Порадуй котэ, ',
        bottomText1: 'Ммм, очень вкусно',
        bottomText2: 'Печалька, с фуа-гра закончился.',
        bottomLink: 'купи.',
        id: 0,
        packageState: null,
        packageHover: null,
      },
      {
        slogan: 'Сказочное заморское яство',
        foodName: 'Нямушка',
        taste: 'с рыбой',
        numberPortions: '40',
        portions: 'порций',
        numberPresent: '2',
        present: 'мыши в подарок',
        extraText: undefined,
        amountFood: '2',
        unit: 'кг',
        bottomText: 'Чего сидишь? Порадуй котэ, ',
        bottomText1: 'Головы щучьи с чесноком да свежайшая сёмгушка',
        bottomText2: 'Печалька, с рыбой закончился.',
        bottomLink: 'купи.',
        id: 1,
        packageState: 'noAccess',
        packageHover: null,
      },
      {
        slogan: 'Сказочное заморское яство',
        foodName: 'Нямушка',
        taste: 'с курой',
        numberPortions: '100',
        portions: 'порций',
        numberPresent: '5',
        present: 'мышей в подарок',
        extraText: 'заказчик доволен',
        amountFood: '5',
        unit: 'кг',
        bottomText: 'Чего сидишь? Порадуй котэ, ',
        bottomText1: 'Ммм, очень вкусно',
        bottomText2: 'Печалька, с курой закончился.',
        bottomLink: 'купи.',
        id: 2,
        packageState: null,
        packageHover: null,
      },
    ]
  }

  onPackageClickHandler = packageId => {
    const pState = this.state.packages[packageId].packageState

    if (pState === null) {
      let newPackages = Object.assign({}, this.state.packages);
      newPackages[packageId].packageState = 'chosen';
      this.setState({packages: newPackages});

    } else if (pState === 'chosen') {
      let newPackages = Object.assign({}, this.state.packages);
      newPackages[packageId].packageState = null;
      this.setState({packages: newPackages});
    }

    return
  }

  onMouseLeavePackageHandler = (packageId) => {
    const pHover = this.state.packages[packageId].packageHover

    if (pHover === null) {
      let newPackages = Object.assign({}, this.state.packages);
      newPackages[packageId].packageHover = 'translate';
      this.setState({packages: newPackages});
    }
    
    setTimeout(() => {
      let newPackages = Object.assign({}, this.state.packages);
      newPackages[packageId].packageHover = null;
      this.setState({packages: newPackages});
    }, "1000")
  }

  render() {
    return (
      <div className={classes.Packages}>
        <Package
           slogan={this.state.packages[0].slogan}
           foodName={this.state.packages[0].foodName}
           taste={this.state.packages[0].taste}
           numberPortions={this.state.packages[0].numberPortions}
           portions={this.state.packages[0].portions}
           numberPresent={this.state.packages[0].numberPresent}
           present={this.state.packages[0].present}
           extraText={this.state.packages[0].extraText}
           amountFood={this.state.packages[0].amountFood}
           unit={this.state.packages[0].unit}
           bottomText={this.state.packages[0].bottomText}
           bottomText1={this.state.packages[0].bottomText1}
           bottomText2={this.state.packages[0].bottomText2}
           bottomLink={this.state.packages[0].bottomLink}
           packageState={this.state.packages[0].packageState}
           packageHover={this.state.packages[0].packageHover}
           id={this.state.packages[0].id}
           onPackageClick={this.onPackageClickHandler}
           onMouseLeavePackage={this.onMouseLeavePackageHandler}
        ></Package>
        <Package
           slogan={this.state.packages[1].slogan}
           foodName={this.state.packages[1].foodName}
           taste={this.state.packages[1].taste}
           numberPortions={this.state.packages[1].numberPortions}
           portions={this.state.packages[1].portions}
           numberPresent={this.state.packages[1].numberPresent}
           present={this.state.packages[1].present}
           extraText={this.state.packages[1].extraText}
           amountFood={this.state.packages[1].amountFood}
           unit={this.state.packages[1].unit}
           bottomText={this.state.packages[1].bottomText}
           bottomText1={this.state.packages[1].bottomText1}
           bottomText2={this.state.packages[1].bottomText2}
           bottomLink={this.state.packages[1].bottomLink}
           packageState={this.state.packages[1].packageState}
           packageHover={this.state.packages[1].packageHover}
           id={this.state.packages[1].id}
           onPackageClick={this.onPackageClickHandler}
           onMouseLeavePackage={this.onMouseLeavePackageHandler}
        ></Package>
        <Package
           slogan={this.state.packages[2].slogan}
           foodName={this.state.packages[2].foodName}
           taste={this.state.packages[2].taste}
           numberPortions={this.state.packages[2].numberPortions}
           portions={this.state.packages[2].portions}
           numberPresent={this.state.packages[2].numberPresent}
           present={this.state.packages[2].present}
           extraText={this.state.packages[2].extraText}
           amountFood={this.state.packages[2].amountFood}
           unit={this.state.packages[2].unit}
           bottomText={this.state.packages[2].bottomText}
           bottomText1={this.state.packages[2].bottomText1}
           bottomText2={this.state.packages[2].bottomText2}
           bottomLink={this.state.packages[2].bottomLink}
           packageState={this.state.packages[2].packageState}
           packageHover={this.state.packages[2].packageHover}
           id={this.state.packages[2].id}
           onPackageClick={this.onPackageClickHandler}
           onMouseLeavePackage={this.onMouseLeavePackageHandler}
        ></Package>
      </div>
    )
  }
}

export default Packages