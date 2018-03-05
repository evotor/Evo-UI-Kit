import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[evo-button]',
  templateUrl: './evo-button.component.html',
  styleUrls: ['./evo-button.component.scss']
})
export class EVOButtonComponent {

  constructor() { }

  @Input( 'evo-button' )
  type: string = 'primary';

  @Input( 'size' )
  size: string = 'standard';


  @HostBinding( 'class.primary-type' )
  get isPrimaryType(): boolean {
    return this.type === 'primary';
  }

  @HostBinding( 'class.primary-inverted-type' )
  get isPrimaryInvertedType(): boolean {
    return this.type === 'primary-inverted';
  }

  @HostBinding( 'class.positive-type' )
  get isPositiveType(): boolean {
    return this.type === 'positive';
  }

  @HostBinding( 'class.positive-inverted-type' )
  get isPositiveInvertedType(): boolean {
    return this.type === 'positive-inverted';
  }

  @HostBinding( 'class.bonus-type' )
  get isBonusType(): boolean {
    return this.type === 'bonus';
  }

  @HostBinding( 'class.secondary-type' )
  get isSecondaryType(): boolean {
    return this.type === 'secondary';
  }


  @HostBinding( 'class.small-size' )
  get isSmallSize(): boolean {
    return this.size === 'small';
  }

  @HostBinding( 'class.standard-size' )
  get isStandardSize(): boolean {
    return this.size === 'standard';
  }

  @HostBinding( 'class.big-size' )
  get isBigSize(): boolean {
    return this.size === 'big';
  }

}
