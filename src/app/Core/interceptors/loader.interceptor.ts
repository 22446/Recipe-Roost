import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loader=inject(NgxSpinnerService)
  loader.show()
  return next(req).pipe(finalize(()=>{
    loader.hide()
  }));
};
