import React from "react";
import classes from './Package.module.css'
import cat from '../../photos/cat.png'

const Package = props => {
  const cls = [classes.mainArea]
  const cls1 = [classes.amountUnit]
  const cls2 = [classes.bottomText]
  const cls3 = [classes.divForHover]
  
  if (props.packageState) {
    cls.push(classes[props.packageState])
    cls1.push(classes[props.packageState])
    cls2.push(classes[props.packageState])
  }

  if (props.packageHover) {
    cls3.push(classes[props.packageHover])
  }


  return (
  <div className={classes.Package}>
    <div className={cls3.join(' ')}>
      <div
      className={cls.join(' ')}
      onClick={() => props.onPackageClick(props.id)}
      onMouseLeave={() => props.onMouseLeavePackage(props.id)}
    >
      <div className={classes.topPart}>
        <div className={classes.slogan}>{props.slogan}</div>
        <div className={classes.foodName}><h3><strong>{props.foodName}</strong></h3></div>
        <div className={classes.taste}>{props.taste}</div>
        <div className={classes.smallText}><b>{props.numberPortions}</b> {props.portions}</div>
        <div className={classes.smallText}><b>{props.numberPresent}</b> {props.present}</div>
        <div className={classes.smallText}>
          {props.extraText ? props.extraText : null}
        </div>
      </div>
  
      <div className={classes.bottomPart}>
        <img className={classes.cat} src={cat} alt="Cat"></img>
        <div
          className={cls1.join(' ')}
        >
          <div className={classes.amountFood}>{props.amountFood}</div>
          <div className={classes.unit}>{props.unit}</div>
        </div>
      </div>
    </div>
    </div>
    

    <div className={classes.underArea}>
      <div className={cls2.join(' ')}>
        {props.packageState === null ? props.bottomText : null}
        {props.packageState === 'noAccess' ? props.bottomText2 : null}
        {props.packageState === 'chosen' ? props.bottomText1 : null}
        <span
          className={classes.bottomLink}
          onClick={() => props.onPackageClick(props.id)}
        >
          {props.packageState ? null : props.bottomLink}
        </span>
      </div>
    </div>

  </div>
  )
}

export default Package