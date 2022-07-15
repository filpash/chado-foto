import { InjectionToken } from '@angular/core';
import { ICarousel } from "../models/ICarousel";
import { ICollapse } from "../models/ICollapse";
import { IBooks } from "../models/IBooks";

export const WINDOW = new InjectionToken('');
export const CAROUSEL = new InjectionToken<ICarousel>('');
export const COLLAPSE = new InjectionToken<ICollapse>('');
export const BOOKS = new InjectionToken<IBooks>('');
