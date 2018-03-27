const srcDir = './evo-ui-kit/src/';
const dstDir = './dist/evo-ui-kit/';
const assetsDir = 'assets/';
const stylesDir = 'styles/';

const srcAssets = srcDir + assetsDir;
const dstAssets = dstDir + assetsDir;

const scssSrcFile = srcDir + stylesDir + 'main.scss';
const scssDstDir = dstDir + stylesDir;
const scssDstFile = scssDstDir + 'main.scss';
const cssDstFile = scssDstDir + 'main.css';

const pemFile = 'wc.market.local.bundle.pem';
const srcPemFile = './' + pemFile;
const dstPemFile = dstDir + pemFile;

const npmrcFile = '.npmrc';
const srcNPMRCFile = './' + npmrcFile;
const dstNPMRCFile = dstDir + npmrcFile;

const ngpckgr = require( 'ng-packagr' );
const SCSSBundler = require( 'scss-bundle' ).Bundler;
const path = require( 'path' );
const fs = require( 'fs' );
const sass = require('node-sass');
const copydir = require( 'copy-dir' );


ngpckgr.build( { project : path.resolve( './evo-ui-kit/package.json' ) } ).then( () => {

    console.log( 'Module successfully created' );

    if ( ! fs.existsSync( path.resolve( scssDstDir ) ) ){
       fs.mkdirSync( path.resolve( scssDstDir ) );
    }

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

                       const fullDstAssetsPath = path.resolve( dstAssets );

                       if ( ! fs.existsSync( fullDstAssetsPath ) ){
                           fs.mkdirSync( fullDstAssetsPath );
                        } 

                       copydir.sync( path.resolve( srcAssets ), fullDstAssetsPath );

                       fs.copyFileSync( path.resolve( srcNPMRCFile ), path.resolve( dstNPMRCFile ) );
                       fs.copyFileSync( path.resolve( srcPemFile ), path.resolve( dstPemFile ) );
                    }
                   }
                 )
             }
        } )
    } } )
   } )
} );

