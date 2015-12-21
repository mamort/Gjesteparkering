using System;
using Castle.Core;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace Gjesteparkering.Framework
{
    public abstract class AbstractWindsorInstaller
    {
        protected IWindsorContainer Container { get; set; }

        protected abstract void Install(IWindsorContainer container);

        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            Container = container;

            Install(container);
        }

        protected virtual void RegisterStartable(FromAssemblyDescriptor descriptor)
        {
            RegisterTransientBasedOnInterface(descriptor, typeof(IStartable));
        }

        protected void RegisterPrWebReq(FromAssemblyDescriptor descr, Type type)
        {
            Container.Register(
                descr
                    .IncludeNonPublicTypes()
                    .BasedOn(type)
                    .WithService.FirstInterface().Configure(c => c.LifestylePerWebRequest()));
        }

        protected void RegisterTransientBasedOnInterface(FromAssemblyDescriptor descr, Type type)
        {
            Container.Register(
                descr
                    .IncludeNonPublicTypes()
                    .BasedOn(type)
                    .WithService.FromInterface());
        }

        protected void RegisterInstance<T>(T instance) where T : class
        {
            Container.Register(Component.For<T>().Instance(instance).LifestyleSingleton());
        }

        protected void RegisterPrUnitOfWork<T, TV>() where TV : T where T : class
        {
            Container.Register(Component.For<T>().ImplementedBy<TV>().LifestylePerWebRequest());
        }

        protected void RegisterPrUnitOfWork<T>(Func<T> factoryMethod) where T : class
        {
            Container.Register(Component.For<T>().LifestylePerWebRequest().UsingFactoryMethod(factoryMethod));
        }

        protected void RegisterPrWebReq<T, TV>() where TV : T where T : class
        {
            Container.Register(Component.For<T>().ImplementedBy<TV>().LifestyleTransient());
        }

        protected void RegisterTransient<T, TV>() where TV : T where T : class
        {
            Container.Register(Component.For<T>().ImplementedBy<TV>().LifestyleTransient());
        }

        protected void RegisterTransient(Type type, Type implType)
        {
            Container.Register(Component.For(type).ImplementedBy(implType).LifestyleTransient());
        }

        protected void RegisterSingleton<T, TV>() where TV : T where T : class
        {
            Container.Register(Component.For<T>().ImplementedBy<TV>().LifestyleSingleton());
        }

        protected void RegisterSingleton(Type type, Type implType)
        {
            Container.Register(Component.For(type).ImplementedBy(implType).LifestyleSingleton());
        }
    }
}