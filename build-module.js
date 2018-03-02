const srcDir = './src/'
const dstDir = './dist/';
const assetsDir = 'assets';

const srcAssets = srcDir + assetsDir;
const dstAssets = dstDir + assetsDir;

const scssSrcFile = srcDir + 'assets/scss/style.scss';
const scssDstFile = dstDir + 'main.scss';
const cssDstFile = dstDir + 'main.css';

const ngpckgr = require( 'ng-packagr' );
const SCSSBundler = require( 'scss-bundle' ).Bundler;
const path = require( 'path' );
const fs = require( 'fs' );
const sass = require('node-sass');
const copydir = require( 'copy-dir' );


ngpckgr.build( { project : 'ng-package.json' } ).then( () => {

  console.log( 'Module successfully created' );

    new SCSSBundler().Bundle( path.resolve( scssSrcFile ) ).then( ( result ) => {

      fs.writeFile( path.resolve( scssDstFile ), result.bundledContent, ( error ) => {
        if ( ! error ) {

          console.log( 'SASS bundle successfully created' );

          sass.render( { file: scssDstFile }, ( error, result ) => {
            if ( ! error ) {

                 fs.writeFile( path.resolve( cssDstFile ), result.css.toString( 'utf-8' ), ( error ) => {
                    if ( ! error ) {
                       console.log( 'CSS successfully compiled' );

                       fs.unlinkSync( path.resolve( scssDstFile ) );
                       copydir.sync( path.resolve( srcAssets ), path.resolve( dstAssets ) );
                    }
                   }
                 )
             }
        } )
    } } )
   } )
} );

