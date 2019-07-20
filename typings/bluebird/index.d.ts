// Type definitions for bluebird 3.5
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: Leonard Hecker <https://github.com/lhecker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/*!
 * The code following this comment originates from:
 *   https://github.com/types/npm-bluebird
 *
 * Note for browser users: use bluebird-global typings instead of this one
 * if you want to use Bluebird via the global Promise symbol.
 *
 * Licensed under:
 *   The MIT License (MIT)
 *
 *   Copyright (c) 2016 unional
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */
declare module 'bluebird' {
    type Constructor<E> = new (...args: any[]) => E;
    type Resolvable<R> = R | PromiseLike<R>;

    class Bluebird<R> implements PromiseLike<R> {
        readonly [Symbol.toStringTag]: "Object";

        /**
         * Create a new promise. The passed in function will receive functions
         * `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
         *
         * If promise cancellation is enabled, passed in function will receive
         * one more function argument `onCancel` that allows to register an optional cancellation callback.
         */
        constructor(callback: (resolve: (thenableOrResult?: Resolvable<R>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void) => void);

        /**
         * Promises/A+ `.then()`. Returns a new promise chained from this promise.
         *
         * The new promise will be rejected or resolved depending on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.
         */
        // Based on PromiseLike.then, but returns a Bluebird instance.
        then<U>(onFulfill?: (value: R) => Resolvable<U>, onReject?: (error: any) => Resolvable<U>): Bluebird<U>; // For simpler signature help.
        then<TResult1 = R, TResult2 = never>(
            onfulfilled?: ((value: R) => Resolvable<TResult1>) | null,
            onrejected?: ((reason: any) => Resolvable<TResult2>) | null
        ): Bluebird<TResult1 | TResult2>;

        /**
         * Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
         */
        static resolve(): Bluebird<void>;
        static resolve<R>(value: Resolvable<R>): Bluebird<R>;
    }

    export = Bluebird;
}