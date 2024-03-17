import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
  // the role the user must have
  @Input() hasRole: string [];

  isVisible = false;


  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {}

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }
}
